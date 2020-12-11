
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn : true, user} : { loggedIn: false, user: null };

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCEEDED':
            return {
                loggedIn : true,
                user: action.payload,
            };
        case 'LOGIN_FAILED':
            return { loggedIn: false, user: null };
        case 'LOGOUT':
            return { loggedIn: false, user: null };

        default:
            return state;
    }
}

