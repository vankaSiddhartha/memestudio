// components/VideoPlayer.js

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, controls = true, playing = false, loop = false }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        controls={controls}
        playing={playing}
        loop={loop}
        width="100%"
        height="100%"
      />
      <style jsx>{`
        .player-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
