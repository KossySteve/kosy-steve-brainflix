import React from "react";

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
