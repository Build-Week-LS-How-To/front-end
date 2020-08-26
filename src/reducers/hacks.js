import {
    FETCH_HACKS_START,
    FETCH_HACKS_SUCCESS,
    FETCH_HACKS_ERROR
} from '../actions/dashboard-hacks'

const initialState = {
    hacks: [],
    isFetching: true,
    error: ""
}

export default function hacksReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_HACKS_START:
            return {
                ...state
            }
        
        case FETCH_HACKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                hacks: action.payload
            }

        case FETCH_HACKS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return(state)
    }
}