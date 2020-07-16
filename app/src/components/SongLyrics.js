import React from "react";
import { connect } from "react-redux";
import { fetchSongLyrics } from "../store/Actions";

const SongLyrics = props => {

    return (
        <div>
            {props.isLoading && <h4>Loading Song Lyrics...</h4>}
            {props.error && (
                <p className="error">{props.error}</p>
            )}
            {props.artist !== '' && props.song !== '' && props.lyrics.length > 0 && <h4>{props.song} by {props.artist}</h4>}
            
            {props.lyrics.length > 0 && (
                <pre>
                    {props.lyrics}
                </pre>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        lyrics: state.lyrics,
        error: state.error
    };
};

export default connect(
    mapStateToProps
)(SongLyrics);