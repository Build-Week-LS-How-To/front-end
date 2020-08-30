import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'

// ACTION CREATORS
export const FETCH_HACKS_START = "FETCH_START"
export const FETCH_HACKS_SUCCESS = "FETCH_HACKS_SUCCESS"
export const FETCH_HACKS_ERROR = "FETCH_HACKS_ERROR"
<<<<<<< HEAD
//init hack by romeo
const initHack = {
    title:'',
    description:'',
    id:Date.now()
}
export const fetchHacks = () => dispatch => {
    dispatch ({ type: FETCH_HACKS_START })
    
    axios
        .get('https://how-to-1.herokuapp.com/api/howTo/users', {
            params: {
                _limit: 5
            }
        })
=======

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
>>>>>>> 287a176b6210e233de233cfa87961f9779ffcaee
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

export const fetchHacksSteps = (hackId) => dispatch => {
    dispatch ({ type: FETCH_HACK_STEPS })

    axios
<<<<<<< HEAD
        .get('https://how-to-1.herokuapp.com/api/howTo')
=======
        .get(`https://how-to-1.herokuapp.com/api/howTo/${hackId}`)
>>>>>>> 287a176b6210e233de233cfa87961f9779ffcaee
        .then( res => {
            console.log("hack res from fetchHacksSteps", res.data[0])
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
export const editHack = ()=>dispatch=>{
    dispatch ({ type: FETCH_HACKS_START });
    axios
    .put('https://how-to-1.herokuapp.com/api/howTo/:id',initHack)
}