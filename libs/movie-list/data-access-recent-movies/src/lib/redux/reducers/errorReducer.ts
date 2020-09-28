import { MOVIES, SetErrorAction } from '../constants'

//const initialState: boolean = false;

const loadingReducer = (state = null, action: SetErrorAction) => {
    switch (action.type) {
        case MOVIES.LOAD_FAILURE: {
            return action.payload;
        }
        case MOVIES.LOAD_REQUEST: {
            return null;
        }
        case MOVIES.LOAD_SUCCESS: {
            return null
        }
        default:
            return state
    }
}

// const loadingReducer = createReducer(initialState)

export default loadingReducer