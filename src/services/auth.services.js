import { requestHelpers } from '../helpers';

const login = async (username, password) => {
    const reqOpts = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ username, password }),
    }
    return fetch('/auth/obtain', reqOpts)
    .then(requestHelpers.handleResponse)
    .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

export {
    login,
}
