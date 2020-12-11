import React from 'react'
import { connect } from 'react-redux'

import { authActions } from '../../redux/actions';


/**
 * Login page layout as a component.
 * 
 * @param {object} props
 * @param {Callback} props.dispatch - React-redux's store.dispatch()
 * @constructor
 */
const LoginPage = (props) => {

    /**
     * React hooks.
     *  
     * Hooks so we can use controlled inputs.
     */
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { user } = props;
    const { dispatch } = props;

    /**
     * Private submission handler for our login form.
     * 
     * @param {object} evt - Event object fired by the DOM.
     */
    const _submitHandler = async (evt) => {
        evt.preventDefault();
        const blah = dispatch(authActions.login(username, password));
    }

    const _testProtected = async (evt) => {
        evt.preventDefault();

    }

    const _testRefresh = async (evt) => {
        evt.preventDefault();

    }

    const _testLogout = async (evt) => {
        evt.preventDefault();

    }

    const _viewState = async (evt) => {
        evt.preventDefault();
        console.log("Props", props);
        console.log("User", user);
        console.log("local storage", localStorage.getItem('user'));
    }

    return (
        <div>
            <form onSubmit={_submitHandler}>
                <input type="text" name="username" placeholder="username" onChange={(evt) => setUsername(evt.target.value)}></input>
                <input type="password" name="password" placeholder="password" onChange={(evt) => setPassword(evt.target.value)}></input>
                <button type="submit">Login</button>
            </form>

            <hr />
            <form onSubmit={_testProtected}>
                <button type="submit">Test Protected</button>
            </form>
            <hr />
            <form onSubmit={_testRefresh}>
                <button type="submit">Test Refresh</button>
            </form>
            <hr />
            <form onSubmit={_testLogout}>
                <button type="submit">Test Logout</button>
            </form>
            <hr />
            <form onSubmit={_viewState}>
                <button type="submit">Log the state of things</button>
            </form>               
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}


export default connect(mapStateToProps)(LoginPage);
