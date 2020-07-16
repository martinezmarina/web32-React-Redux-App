import axios from "axios";

export const FETCH_SONGLYRICS_START = "FETCH_SONGLYRICS_START";
export const FETCH_SONGLYRICS_SUCCESS = "FETCH_SONGLYRICS_SUCCESS";
export const FETCH_SONGLYRICS_ERROR = "FETCH_SONGLYRICS_ERROR"

export const fetchSongLyrics = (artist, song) => {

    return dispatch => {
        dispatch({ type: FETCH_SONGLYRICS_START });
        axios
            .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(res => {
               dispatch({ type: FETCH_SONGLYRICS_SUCCESS, payload: res.data.lyrics }) 
            })
            .catch(err => {
                dispatch({ type: FETCH_SONGLYRICS_ERROR, payload: err.response.data.error })
                debugger
            }) 
    }
}