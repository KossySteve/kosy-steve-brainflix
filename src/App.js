import { Component } from "react";
import "./App.css";
import { maxVideoList } from "./data/video-details";
import { minVideoList } from "./data/videos";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  state = { maxVideoList: maxVideoList, minVideoList: minVideoList };

  render() {
    // const filteredPlants = plantsData.filter((plant) => plant.id !== this.state.activePlant.id);

    // const { name, age, description, avatar: image } = this.state.activePlant;
    console.log(this.state);
    return (
      <div>
        <Header />
        <Main nextVideos={this.state.minVideoList} />
      </div>
    );
  }
}

export default App;
