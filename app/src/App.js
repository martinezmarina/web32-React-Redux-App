import React from 'react';
import ArtistForm from "./components/ArtistForm"

import './App.css';
import SongLyrics from './components/SongLyrics';


function App () {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Lyric Search</h1>
        <ArtistForm />
      </header>
      <SongLyrics />
    </div>
  );
}

export default (App);
