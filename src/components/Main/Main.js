import React from "react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";

function Main({nextVideos}) {
  return (
    <main className="main">
      <section>
        <VideoDetails />
        <Form />
        <Comments />
      </section>
      <NextVideos nextVideos={nextVideos} />
    </main>
  );
}

export default Main;
