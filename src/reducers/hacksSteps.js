import {
    FETCH_HACK_STEPS,
    FETCH_STEPS_SUCCESS,
    FETCH_STEPS_ERROR
} from '../actions/dashboard-hacks'

const initialState = {
    hack: {
        "title": "",
        "description": "",
        "img_url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "stepOneTitle": "Step 1",
        "stepOneDescription": "",
        "stepTwoTitle": "Step 2",
        "stepTwoDescription": "",
        "stepThreeTitle": "Step 3",
        "stepThreeDescription": "",
        "upVote": 0,
        "downVote": 0,

    },
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