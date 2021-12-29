import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"

const Player = ( { currentSong, isPlaying, setIsPlaying, songs, setCurrentSong } ) => {
    // states
    const [songInfo, setSongInfo] = useState( {
        currentTime: "0:00",
        duration: "0:00",
    } )

    const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100

    // other functions
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // handlers
    const audioRef = useRef(null)
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        }
        else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo( {...songInfo, currentTime: current, duration})
    }

    const volumeUpdateHandler = (e) => {
        audioRef.current.volume = e.target.value
    }

    const autoPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.play()
        }
    }

    const skipTrackHandler = (direction) => {
        let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
        if(direction === 'skip-forwards'){
            setCurrentSong(songs[currentSongIndex+1 === songs.length ? 0 : currentSongIndex+1]);
        }
        if(direction === 'skip-back'){
            setCurrentSong(songs[currentSongIndex-1 < 0 ? songs.length-1 : currentSongIndex-1]);
        }
    }

    const songEndHandler = () => {
        let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
        setCurrentSong(songs[currentSongIndex+1 === songs.length ? 0 : currentSongIndex+1]);
      }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}className="track">
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div style={{ transform: `translateX(${animationPercentage}%)`}}className="animate-track"></div>
                </div>
                
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="volume-control">
                <input onChange={volumeUpdateHandler} min={0} max={1} step={.01} type="range"></input>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} className="skip-backwards" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forwards")} className="skip-forwards" size="2x"icon={faAngleRight} />
            </div>
            <audio onEnded={songEndHandler} onLoadedData={autoPlayHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;