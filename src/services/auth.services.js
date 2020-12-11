import { requestHelpers } from '../helpers';

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
}


export {
    logout,
    login,
}
