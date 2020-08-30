import axios from 'axios';

// ACTION CREATORS
export const FETCH_HACKS_START = "FETCH_START"
export const FETCH_HACKS_SUCCESS = "FETCH_HACKS_SUCCESS"
export const FETCH_HACKS_ERROR = "FETCH_HACKS_ERROR"
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

export const fetchAllHacks = () => dispatch => {
    dispatch ({ type: FETCH_HACKS_START })
    
    axios
        .get('https://how-to-1.herokuapp.com/api/howTo')
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
export const editHack = ()=>dispatch=>{
    dispatch ({ type: FETCH_HACKS_START });
    axios
    .put('https://how-to-1.herokuapp.com/api/howTo/:id',initHack)
}