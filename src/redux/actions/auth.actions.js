import { authServices } from '../../services';

const login = (username, password) => {
    const success = (user) => {
        return {
            type: 'LOGIN_SUCCEEDED',
            payload: user,
        };
    }

    const failure = (err) => {
        return {
            type: 'LOGIN_FAILED',
            payload: err,
        }
    }

    return (dispatch) => {
        authServices.login(username, password)
        .then((user) => {
            console.log("working in actions?")
            dispatch(success(user));
        },
        (error) => {
            dispatch(failure(error));
        });
    }
}

const logout = () => {
    return (dispatch) => {
        dispatch({type: 'LOGOUT'});
    }
}


export {
    logout,
    login,
}
