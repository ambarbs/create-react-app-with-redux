import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {reducers} from './reducers';




export const appStore = createStore(
    /*
    * Combine the reducers.
    */
    combineReducers(reducers),
    {},
    applyMiddleware(createLogger())
);

appStore.subscribe(() => {
    // console.log('Store updated ', appStore.getState() );
});