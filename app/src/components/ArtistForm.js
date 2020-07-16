import React from 'react';
import { useForm } from "../hooks/useForm"
import { fetchSongLyrics } from '../store/Actions';
import { connect } from 'react-redux'

const initialValues = {
    artistName: "",
    songTitle: "",
}

const ArtistForm = props => {
    const [inputValues, handleChanges, clearForm] = useForm(initialValues)

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchSongLyrics(inputValues.artistName, inputValues.songTitle)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="artistSearch"
                    type="text"
                    name="artistName"
                    placeholder="Artist"
                    value={inputValues.artistName}
                    onChange={handleChanges}
                />
                <input
                    className="songSearch"
                    type="text"
                    name="songTitle"
                    placeholder="Song Title"
                    value={inputValues.songTitle}
                    onChange={handleChanges}
                />
                <button>Search</button>
                <button onClick={clearForm}>Clear</button>
            </form>
        </div>
    )
}


export default connect(null,{ fetchSongLyrics }) (ArtistForm);