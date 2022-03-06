import React from "react";
import './Hero.scss'

function Hero({mainVideo}) {
  return (
    <section className="hero">
      <video className="hero__video" poster={mainVideo.image} controls>
        <source src="" type="video/mp4" />
      </video>
    </section>
  );
}

export default Hero;
