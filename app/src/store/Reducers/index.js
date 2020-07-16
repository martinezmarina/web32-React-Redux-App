import { FETCH_SONGLYRICS_START, FETCH_SONGLYRICS_SUCCESS, FETCH_SONGLYRICS_ERROR } from "../Actions";

const initialState = {
    isLoading: false,
    lyrics: [],
    error: ""
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SONGLYRICS_START:
            return {
                ...state, 
                isLoading: true,
                lyrics: [],
                error: ""
            }
        case FETCH_SONGLYRICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lyrics: action.payload,
                error: ""
            }
        case FETCH_SONGLYRICS_ERROR:
            return {
                ...state,
                isLoading: false,
                lyrics: [],
                error: action.payload,
            }
        default:
            return state;
    }
}