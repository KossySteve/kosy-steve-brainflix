import React from "react";

function NextVideos({ nextVideos, handleVideoChange }) {
  return (
    <section className="next-videos-section">
      <div className="next-videos-container">
        <h3 className="next-videos__heading--grey">NEXT VIDEOS</h3>

        {nextVideos.map((video) => (
          <div
            key={video.id}
            className="next-videos"
            onClick={() => handleVideoChange(video.id)}
          >
            <div className="next-videos__frame" >
              <img
                className="next-videos__screen"
                src={video.image}

              />
            </div>
            <div className="next-videos__box">
              <h3 className="next-videos__heading">{video.title}</h3>
              <p className="next-videos__text">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NextVideos;
