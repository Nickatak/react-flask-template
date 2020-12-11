import { requestHelpers } from '../helpers';
import { authActions } from '../redux/actions';

const login = async (username, password) => {

    const reqOpts = {
        method: 'POST',
        headers: requestHelpers.getHeaders(),
        body: JSON.stringify({ username, password }),
    }

    console.log(reqOpts);
    return fetch('/auth/obtain', reqOpts)
    .then(requestHelpers.handleResponse)
    .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

const logout = async () => {
    // Clear localStorage.
    localStorage.removeItem('user');

    // Fire the logout action to clear the redux state.
    authActions.logout('');
}


export {
    logout,
    login,
}
