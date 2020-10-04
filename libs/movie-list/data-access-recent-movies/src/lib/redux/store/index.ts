import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'

import latestMovieSaga from '../sagas';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    );

    sagaMiddleware.run(latestMovieSaga);

    return store;
}
