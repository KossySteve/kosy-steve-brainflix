import React from 'react'
import logo from "../../assets/logo/BrainFlix-logo.svg";

function NextVideos() {
  return (
    <section className="next-videos-section">
    <div className="next-videos-container">
      <h3 className="next-videos__heading--grey">NEXT VIDEOS</h3>

      <div className="next-videos">
        <div className="next-videos__frame">
          <video className="next-videos__screen" poster={logo} controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="next-videos__box">
          <h3 className="next-videos__heading">Connor Walton</h3>
          <p className="next-videos__text">
            This is art. This is inexplicable
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NextVideos