import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../App";
import Main from "../../components/Main/Main";

export class Home extends Component {
  state = { videos: [], selectedVideo: null };

  fetchVideoDetails = () => {
    //sets currentVideoId to url parameter or first video in video list
    let currentVideoId = this.props.match.params.videoId;

    //just putting http://localhost:3000/ in the browser
    if (!currentVideoId) {
      const videoIds = this.state.videos.map((video) => video.id);
      //const randomIndex = Math.floor(Math.random() * videoIds.length);
      currentVideoId = videoIds[0];
    }
    //sets selectedVideo to the first obj in array
    axios
      .get(
        `${API_URL}/${currentVideoId}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`
      )
      .then(({ data }) => {
        this.setState({ selectedVideo: data });
        console.log(this.state.selectedVideo.comments);
      });
  };
  // after first render set state to api array & obj.
  componentDidMount() {
    axios
      .get(`${API_URL}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`)
      .then(({ data }) => {
        this.setState({ videos: data }, this.fetchVideoDetails);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.fetchVideoDetails();
    }
  }

  render() {
    if (!this.state.videos.length) {
      return <h2>Loading...</h2>;
    }
    const filteredNextVideos = this.state.selectedVideo
      ? this.state.videos.filter(
          (video) => video.id !== this.state.selectedVideo.id
        )
      : this.state.videos;

    return (
      //   <main className="main">
      //     {this.state.selectedVideo && (
      //       <Main
      //         mainVideo={this.state.selectedVideo}
      //         nextVideos={filteredNextVideos}
      //       />
      //     )}
      //   </main>
      <section>
        {this.state.selectedVideo && (
          <Main
            mainVideo={this.state.selectedVideo}
            nextVideos={filteredNextVideos}
          />
        )}
      </section>
    );
  }
}

export default Home;
