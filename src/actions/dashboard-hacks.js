import axiosWithAuth from '../utils/axiosWithAuth';

// ACTION CREATORS
export const FETCH_HACKS_START = "FETCH_START"
export const FETCH_HACKS_SUCCESS = "FETCH_HACKS_SUCCESS"
export const FETCH_HACKS_ERROR = "FETCH_HACKS_ERROR"

export const FETCH_HACKS_STEPS_START = "FETCH_HACKS_STEPS_START"
export const FETCH_HACKS_STEPS_SUCCESS = "FETCH_HACKS_STEPS_SUCCESS"
export const FETCH_HACKS_STEPS_ERROR = "FETCH_HACKS_STEPS_ERROR"

export const fetchHacks = () => dispatch => {
    dispatch ({ type: FETCH_HACKS_START })
    
    axiosWithAuth()
        .get(`/howTo`)
        .then( res => { 
            console.log("Data from fetchHacks reducer", res.data)
            dispatch({
                type: FETCH_HACKS_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: FETCH_HACKS_ERROR,
                payload: err.message
            })
        })
}

export const fetchHacksSteps = () => dispatch => {
    dispatch ({ type: FETCH_HACKS_STEPS_START })

    axiosWithAuth()
        .get(`/howTo/steps`)
        .then( res => {
            console.log('Data from fetchHacksSteps reducer', res.data)
            dispatch({
                type: FETCH_HACKS_STEPS_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch ({
                type: FETCH_HACKS_STEPS_ERROR,
                payload: err.message
            })
        })
}