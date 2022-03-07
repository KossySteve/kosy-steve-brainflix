import React, { Component } from "react";
import axios from "axios";
import { apiUrl } from "../../App";
import Main from "../../components/Main/Main";

export class Home extends Component {
  state = { videos: [], selectedVideo: null };

  getVideo = (apiCall, stateProp, displayfxn) => {
    axios.get(apiCall).then(({ data }) => {
      this.setState({ [stateProp]: data }, displayfxn);
    });
  };

  fetchVideoDetails = () => {
    //sets currentVideoId to url parameter or first video in video list
    let currentVideoId = this.props.match.params.videoId;

    //if user inputs home url in the browser
    if (!currentVideoId) {
      const videoIds = this.state.videos.map((video) => video.id);

      //first video in videolist is selected
      currentVideoId = videoIds[0];
    }
    //sets selectedVideo to the first obj in array

    this.getVideo(apiUrl(currentVideoId), "selectedVideo");
  };
  // after first render set state to api response data.
  componentDidMount() {
    this.getVideo(apiUrl(""), "videos", this.fetchVideoDetails);
  }

  componentDidUpdate(prevProps) {
    //prevent loop on same props video details as url path changes with clicking of nextVideos link
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.fetchVideoDetails();
    }
  }

  commentHandler = (id, comment) => {
    axios
      .post(apiUrl(`${id}/comments`), JSON.stringify(comment))
      .then(function (response) {
        console.log(response);

        this.getVideo(apiUrl(id), "selectedVideo");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    //loading page to check empty state values before mounting
    if (!this.state.videos.length) {
      return <h2>Loading...</h2>;
    }
    const filteredNextVideos = this.state.selectedVideo
      ? this.state.videos.filter(
          (video) => video.id !== this.state.selectedVideo.id
        )
      : this.state.videos;

    return (
      //check if a particular video has been selected by user before display
      <section>
        {this.state.selectedVideo && (
          <Main
            mainVideo={this.state.selectedVideo}
            nextVideos={filteredNextVideos}
            commentHandler={this.commentHandler}
          />
        )}
      </section>
    );
  }
}

export default Home;
