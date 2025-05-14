import React from 'react';
import './VideoPage.css'; // Import the CSS file

const VideoPage = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted loop>
        <source src="\images\67124fa18a6901b339097e3f.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="responsive-text">
      </div>
    </div>
  );
};

export default VideoPage;