import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <LoginPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
