import React from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = (props) => {
  const {previewVideo, preview, title, isVideo, playVideo} = props;

  return (
    <React.Fragment>
      {isVideo
        ?
        <video
          width="280"
          height="175"
          src={previewVideo}
          poster={preview}
          ref={playVideo}
        >
        </video>
        :
        <img src={preview} alt={title} width="280" height="175" />
      }
    </React.Fragment>
  );
};


export default VideoPlayer;

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isVideo: PropTypes.bool.isRequired,
  playVideo: PropTypes.func.isRequired,
};