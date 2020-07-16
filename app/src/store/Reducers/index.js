import { FETCH_SONGLYRICS_START, FETCH_SONGLYRICS_SUCCESS } from "../Actions";

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
            }
        case FETCH_SONGLYRICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lyrics: action.payload,
                error: ""
            }
        default:
            return state;
    }
}