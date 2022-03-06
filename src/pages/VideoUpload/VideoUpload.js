import React, { Component } from "react";
import "./VideoUpload.scss";
import UploadHero from "../../components/UploadHero/UploadHero";
import UploadForm from "../../components/UploadForm/UploadForm";

export class VideoUpload extends Component {
  state = { videoTitle: "", videoDescription: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formNotValid = () => Object.values(this.state).includes("");

  handleSubmit = (e) => {
    e.preventDefault();
    this.formNotValid()
      ? alert("Failed to upload, complete form")
      : alert("Upload was successful");
  };
  render() {
    return (
      <main className="main-section">
        <h1 className="main-section__title">Upload Video</h1>
        <UploadHero />
        <section>
          <UploadForm
            handleSubmit={this.handleSubmit}
            id1={"videoTitle"}
            id2={"videoDescription"}
            onChange={this.handleChange}
            value1={this.state.videoTitle}
            value2={this.state.videoDescription}
          />
        </section>
      </main>
    );
  }
}

export default VideoUpload;
