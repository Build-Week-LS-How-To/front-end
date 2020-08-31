import {
    ADD_HACK,
    ADD_HACK_SUCCESS,
    ADD_HACK_FAILED,
    ON_TITLE_CHANGE,
    ON_DESCRIPTION_CHANGE,
    ON_STEP_ONE_CHANGE,
    ON_STEP_TWO_CHANGE,
    ON_STEP_THREE_CHANGE,
    ON_USERID_CHANGE
} from '../actions/newHack'

const initialState = {
    formValues: {
        "id": null,
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
        "userID": parseInt(localStorage.getItem('userid'))
    },
    hack: [],
    posting: false,
    postSuccess: null,
    error: ""
}

export const newHackReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_HACK:
            return {
                ...state,
                hack: [
                    ...state.hack,
                    state.formValues
                ]

            }

        case ADD_HACK_SUCCESS:
            return {
                ...state,
                postSuccess: action.payload
            }
        
        case ADD_HACK_FAILED:
            return {
                ...state,
                error: action.payload
            }
        
        case ON_TITLE_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    title: action.payload.target.value
                }
            }
        
        case ON_DESCRIPTION_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    description: action.payload.target.value
                }
            }

        case ON_STEP_ONE_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    stepOneDescription: action.payload.target.value
                }
            }
        
        case ON_STEP_TWO_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    stepTwoDescription: action.payload.target.value
                }
            }

        case ON_STEP_THREE_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    stepThreeDescription: action.payload.target.value
                }
            }
        
        case ON_USERID_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    userID: action.payload.target.value
                }
            }

        default:
            return state
    }
}