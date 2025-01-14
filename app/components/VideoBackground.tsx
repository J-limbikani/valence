import React from 'react'

const VideoBackground = () => {
  return (
    <div className='video-background-container'>
        <video autoPlay muted loop src='/background-video.mp4' className='video-background'/>
    </div>
  );
};

export default VideoBackground;