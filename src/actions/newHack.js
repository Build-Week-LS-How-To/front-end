import axiosWithAuth from '../utils/axiosWithAuth'

// ACTION CREATORS

export const ADD_HACK = "ADD_NEW_HACK"
export const ADD_HACK_SUCCESS = "ADD_HACK_SUCCESS"
export const ADD_HACK_FAILED = "ADD_HACK_FAILED"

export const ON_TITLE_CHANGE = "ON_TITLE_CHANGE"
export const ON_DESCRIPTION_CHANGE = "ON_DESCRIPTION_CHANGE"
export const ON_STEP_ONE_CHANGE = "ON_STEP_ONE_CHANGE"
export const ON_STEP_TWO_CHANGE = "ON_STEP_TWO_CHANGE"
export const ON_STEP_THREE_CHANGE = "ON_STEP_THREE_CHANGE"
export const ON_USERID_CHANGE = "ON_USERID_CHANGE"
export const SET_USER_ID = "SET_USER_ID"

export const addHack = (hack) => dispatch => {

    dispatch({ type: ADD_HACK })

    axiosWithAuth()
        .post('/howTo', hack)
        .then( res => {
            dispatch({
                type: ADD_HACK_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: ADD_HACK_FAILED,
                payload: err.message
            })
        })
}

export const onTitleChange = (e) => {
    e.preventDefault()
    return {
        type: ON_TITLE_CHANGE,
        payload: e
    }
}

export const onDescriptionChange = (e) => {
    e.preventDefault()
    return {
        type: ON_DESCRIPTION_CHANGE,
        payload: e
    }
}

export const onStepOneChange = (e) => {
    e.preventDefault()
    return {
        type: ON_STEP_ONE_CHANGE,
        payload: e
    }
}

export const onStepTwoChange = (e) => {
    e.preventDefault()
    return {
        type: ON_STEP_TWO_CHANGE,
        payload: e
    }
}

export const onStepThreeChange = (e) => {
    e.preventDefault()
    return {
        type: ON_STEP_THREE_CHANGE,
        payload: e
    }
}

export const onUserIdChange = (e) => {
    e.preventDefault()
    return {
        type: ON_USERID_CHANGE,
        payload: e
    }
}

export const userid = () => {
    return {
        type: SET_USER_ID,
        payload: localStorage.getItem('userid')
    }
}