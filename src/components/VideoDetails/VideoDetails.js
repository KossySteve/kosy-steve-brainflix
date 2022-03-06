import React from "react";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";
import './VideoDetails.scss'
function VideoDetails({mainVideo}) {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{mainVideo.title}</h1>
      <div className="video-info__details">
        <div className="video-details">
          <p className="video-details__author">{mainVideo.channel}</p>
          <p>{new Date(mainVideo.timestamp).toISOString().slice(0, 10)}</p>
        </div>
        <div className="video-reactions">
          <p>
            <img className="video-reactions__icon" src={views} alt="views icon" />
            {mainVideo.views}
          </p>
          <p className="video-details__likes" alt="likes icon">
            <img className="video-reactions__icon" src={likes}  alt="likes icon"/> {mainVideo.likes}
          </p>
        </div>
      </div>
      <article className="video-info__description">
        {mainVideo.description}
      </article>
      <p className="video-info__comment-count">{`${mainVideo.comments.length} Comments`}</p>
    </div>
  );
}

export default VideoDetails;
