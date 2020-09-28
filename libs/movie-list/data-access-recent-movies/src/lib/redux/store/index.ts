import rootReducer from '../reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


export const configureStore = () => {
    const store = createStore(rootReducer, 
        composeWithDevTools()
    )

    return store;
}
