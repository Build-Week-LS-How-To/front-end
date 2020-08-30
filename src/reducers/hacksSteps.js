import {
    FETCH_HACK_STEPS,
    FETCH_STEPS_SUCCESS,
    FETCH_STEPS_ERROR
} from '../actions/dashboard-hacks'

const initialState = {
    hack: {},
    isFetching: false,
    error: ""
}

export const hacksStepsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HACK_STEPS:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_STEPS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                hack: action.payload
            }

        case FETCH_STEPS_ERROR:
            return {
                isFetching: false,
                error: action.payload
            }
        default:
            return(state)
    }
}