import React from "react";
import { Link } from "react-router-dom";

function NextVideos({ nextVideos}) {
  return (
    <section className="next-videos-section">
      <div className="next-videos-container">
        <h3 className="next-videos__heading--grey">NEXT VIDEOS</h3>

        {nextVideos.map((video) => (
          <Link to={`/${video.id}`}
            key={video.id}
            className="next-videos"
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
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NextVideos;
