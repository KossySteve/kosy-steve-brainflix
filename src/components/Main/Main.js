import React from "react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";

function Main({nextVideos, mainVideo, handleVideoChange}) {
  return (
    <main className="main">
      <section>
        <VideoDetails mainVideo={mainVideo}/>
        <Form />
        <Comments mainVideo={mainVideo} />
      </section>
      <NextVideos nextVideos={nextVideos} handleVideoChange={handleVideoChange}/>
    </main>
  );
}

export default Main;
