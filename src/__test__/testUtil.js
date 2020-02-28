import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../Redux/Reducers'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const middlewares = [ReduxThunk];
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
  }