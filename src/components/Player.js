import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Player = ( { currentSong, isPlaying, setIsPlaying } ) => {
    const [songInfo, setSongInfo] = useState( {
        currentTime: null,
        duration: null
    } )
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo( {currentTime: current, duration})
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
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
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-backwards" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler}className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forwards" size="2x"icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;