
const tokens = JSON.parse(localStorage.getItem('user'));
const initialState = tokens ? {loggedIn : true, tokens} : { loggedIn: false, tokens: null };

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCEEDED':
            console.log("ACTION", action)
            return {
                loggedIn : true,
                tokens: action.payload,
            };
        case 'LOGIN_FAILED':
            return { loggedIn: false, tokens: null };
        case 'LOGOUT':
            return { loggedIn: false, tokens: null };

        default:
            return state;
    }
}

