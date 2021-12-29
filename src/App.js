import React, { useState } from "react";
//styles
import "./styles/app.scss"
//components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library";
import Nav from "./components/Nav";
//data
import data from "./data"

function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)



  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
