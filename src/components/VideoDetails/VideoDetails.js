import React from "react";

function VideoDetails() {
  return (
    <div className="video-info">
      <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video-info__details">
        <div className="video-details">
          <p className="video-details__author">By Red Crow</p>
          <p>07/11/2021</p>
        </div>
        <div className="video-reactions">
          <p>1,001,023</p>
          <p className="video-details__likes">110,985</p>
        </div>
      </div>
      <article className="video-info__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </article>
      <p className="video-info__comment-count">3 Comments</p>
    </div>
  );
}

export default VideoDetails;
