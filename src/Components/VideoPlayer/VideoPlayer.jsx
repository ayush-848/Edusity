import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({Play, setPlay}) => {
    
    const player = useRef(null);

    const closePlayer =(e)=>{
        if(e.target===player.current){
             setPlay(false);
        }
    }

  return (
    <div className={`video-player ${Play?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer