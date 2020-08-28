import {
    ADD_NEW_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    ON_FIRST_NAME_CHANGE,
    ON_LAST_NAME_CHANGE,
    ON_EMAIL_CHANGE,
    ON_USERNAME_CHANGE,
    ON_PASSWORD_CHANGE
} from '../actions/createUser'

const initialState = {
    formValues: {
        id: Date.now(),
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    },
    users: [],
    postSuccess: null,
    error: ""
}

export const createUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    state.formValues
                ]
            }

        case ADD_USER_SUCCESS:
            return {
                ...state,
                postSuccess: action.payload
            }

        case ADD_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }
        
        case ON_FIRST_NAME_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    firstName: action.payload.target.value
                }
            }

        case ON_LAST_NAME_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    lastName: action.payload.target.value
                }
            }

        case ON_EMAIL_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    email: action.payload.target.value
                }
            }
        
        case ON_USERNAME_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    username: action.payload.target.value
                }
            }
        
        case ON_PASSWORD_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    password: action.payload.target.value
                }
            }
        
        default:
            return state;
    }
}
