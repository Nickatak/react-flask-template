import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * This is a factory just incase want to override anything with thunks/etc. later on.
 * ^ YOu see, this is why we make factories, it's not even past day 1 and we're overriding this.
 */
const makeStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
}

export default makeStore;
