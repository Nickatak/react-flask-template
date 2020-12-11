import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';


import makeStore from'./redux/store';

import LoginPage from './pages/LoginPage';

/**
 * Top-level component called directly by ReactDOM.render().
 */
const App = () => {
    return (
        <Provider store={makeStore()}>
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <LoginPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>

    )
}

export default App;
