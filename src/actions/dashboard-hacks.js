import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'

// ACTION CREATORS
export const FETCH_HACKS_START = "FETCH_START"
export const FETCH_HACKS_SUCCESS = "FETCH_HACKS_SUCCESS"
export const FETCH_HACKS_ERROR = "FETCH_HACKS_ERROR"

export const RELOAD_HACKS= "RELOAD_HACKS"
export const RELOAD_HACKS_SUCCESS = "RELOAD_HACKS_SUCCESS"
export const RELOAD_HACKS_ERROR = "RELOAD_HACKS_ERROR"

export const FETCH_HACK_STEPS = "FETCH_HACK_STEPS"
export const FETCH_STEPS_SUCCESS = "FETCH_STEPS_SUCCESS"
export const FETCH_STEPS_ERROR = "FETCH_STEPS_ERROR"

export const fetchHacks = (userid) => dispatch => {
    dispatch ({ type: FETCH_HACKS_START })
    
    axiosWithAuth(userid)
        .get(`/howTo/${userid}`)
        .then( res => { 
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

export const reloadHacks = () => dispatch => {
    dispatch ({ type: RELOAD_HACKS })
    
    axiosWithAuth()
        .get(`/howTo`)
        .then( res => { 
            dispatch({
                type: RELOAD_HACKS_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: RELOAD_HACKS_ERROR,
                payload: err.message
            })
        })
}

export const fetchHacksSteps = (hackId) => dispatch => {
    dispatch ({ type: FETCH_HACK_STEPS })

    axios
        .get(`https://how-to-1.herokuapp.com/api/howTo/${hackId}`)
        .then( res => {
            console.log("hack res from fetchHacksSteps", res.data[1])
            dispatch({
                type: FETCH_STEPS_SUCCESS,
                payload: res.data[0]
            })
        })
        .catch( err => {
            dispatch({
                type: FETCH_STEPS_ERROR,
                payload: err.message
            })
        })
}