import axiosWithAuth from '../utils/axiosWithAuth';

export const VOTE_UP = "VOTE_UP"
export const PUT_UP_VOTES = "PUT_UP_VOTES"
export const VOTE_DOWN = "VOTE_DOWN"
export const PUT_DOWN_VOTES = "PUT_DOWN_VOTES"

export const upVote = () => dispatch => {
    dispatch ({ type: PUT_UP_VOTES })
    axiosWithAuth()
        .put(`/howTo:id`)
        .then( res => {
            console.log("Data from voteButton", res.data)
            dispatch({
                type: VOTE_UP,
                payload: res.data.upVote + 1
            })
        })
}

export const downVote = () => dispatch => {
    dispatch({ type: PUT_DOWN_VOTES })

    axiosWithAuth()
        .put(`/howTo:id`)
        .then( res => {
            console.log("Data from voteButton", res.data)
            dispatch({
                type: VOTE_DOWN,
                payload: res.data.downVote + 1
            })
        })

}