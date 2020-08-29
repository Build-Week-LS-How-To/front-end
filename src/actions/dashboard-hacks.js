import axiosWithAuth from '../utils/axiosWithAuth';

// ACTION CREATORS
export const FETCH_HACKS_START = "FETCH_START"
export const FETCH_HACKS_SUCCESS = "FETCH_HACKS_SUCCESS"
export const FETCH_HACKS_ERROR = "FETCH_HACKS_ERROR"

export const RELOAD_HACKS= "RELOAD_HACKS"
export const RELOAD_HACKS_SUCCESS = "RELOAD_HACKS_SUCCESS"
export const RELOAD_HACKS_ERROR = "RELOAD_HACKS_ERROR"

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
        .get(`/howTo/`)
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