import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../_reducers';

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware
    )
);