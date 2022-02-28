import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";

function NextVideos({ nextVideos }) {
  return (
    <section className="next-videos-section">
      <div className="next-videos-container">
        <h3 className="next-videos__heading--grey">NEXT VIDEOS</h3>

        {nextVideos.map((video) => (
          <div key={video.id} className="next-videos">
            <div className="next-videos__frame">
              <video className="next-videos__screen" poster={video.image} controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="next-videos__box">
              <h3 className="next-videos__heading">{video.title}</h3>
              <p className="next-videos__text">
                {video.channel}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default NextVideos;
