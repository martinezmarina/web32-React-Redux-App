import axios from "axios";

export const FETCH_SONGLYRICS_START = "FETCH_SONGLYRICS_START";
export const FETCH_SONGLYRICS_SUCCESS = "FETCH_SONGLYRICS_SUCCESS";

export const fetchSongLyrics = (artist, song) => {

    return dispatch => {
        dispatch({ type: FETCH_SONGLYRICS_START });
        axios
            .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(res => {
               dispatch({ type: FETCH_SONGLYRICS_SUCCESS, payload: res.data.lyrics }) 
            })
            .catch(err => console.log(err));
    }
}