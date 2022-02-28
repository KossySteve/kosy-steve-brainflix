import { Component } from "react";
import "./App.css";
import { maxVideoList } from "./data/video-details";
import { minVideoList } from "./data/videos";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  state = { maxVideoList: maxVideoList[0], minVideoList: minVideoList };


  handleVideoChange = (id) => {
    let newMain = this.state.minVideoList.find(video => video.id === id);
    this.setState({ maxVideoList: newMain })
    console.log("Hello")
  }

  render() {
    const filteredVideos = minVideoList.filter((video) => video.id !== this.state.maxVideoList.id);
    //const mainVideos = maxVideoList.find((video) => video.id !== this.state.maxVideoList.id);

    // const { name, age, description, avatar: image } = this.state.activePlant;
    console.log(this.state);
    return (
      <div>
        <Header mainVideo={this.state.maxVideoList} />
        <Main nextVideos={filteredVideos} mainVideo={this.state.maxVideoList} handleVideoChange={this.handleVideoChange} />
      </div>
    );
  }
}

export default App;
