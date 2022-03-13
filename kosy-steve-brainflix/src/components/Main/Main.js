import React from "react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import Hero from "../Hero/Hero";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import './Main.scss'

function Main({ nextVideos, mainVideo, commentHandler }) {
  return (
    <main>
      <Hero mainVideo={mainVideo} />
      <section className="main">
        <section className="main__details">
          <VideoDetails mainVideo={mainVideo} />
          <Form commentHandler={commentHandler} mainVideo={mainVideo}/>
          <Comments mainVideo={mainVideo} />
        </section>
        <NextVideos nextVideos={nextVideos} />
      </section>
    </main>
  );
}

export default Main;
