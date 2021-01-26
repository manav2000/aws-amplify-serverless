import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Todos } from './todos';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            todos: Todos
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}