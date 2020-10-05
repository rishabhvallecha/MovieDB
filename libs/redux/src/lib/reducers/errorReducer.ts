import { LATEST_MOVIES, SetErrorAction } from '../constants'

const errorReducer = (state = null, action: SetErrorAction) => {
    switch (action.type) {
        case LATEST_MOVIES.LOAD_FAILURE: {
            return action.payload;
        }
        case LATEST_MOVIES.LOAD_REQUEST: {
            return null;
        }
        case LATEST_MOVIES.LOAD_SUCCESS: {
            return null
        }
        default:
            return state
    }
}

export default errorReducer;