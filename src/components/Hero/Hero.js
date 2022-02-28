import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
function Hero() {
  return (
    <section className="hero">
      <video className="hero__video" poster={logo} controls>
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Hero;
