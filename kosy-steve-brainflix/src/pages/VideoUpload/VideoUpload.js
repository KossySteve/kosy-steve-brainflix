import React, { Component } from "react";
import axios from "axios";
import UploadForm from "../../components/UploadForm/UploadForm";
import "./VideoUpload.scss";
import { apiUrl } from "../../App";

export class VideoUpload extends Component {
  state = {
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formNotValid = () => Object.values(this.state).includes("");

  handleSubmit = (e) => {
    e.preventDefault();
    this.formNotValid()
      ? alert("Failed to upload, complete form")
      : axios.post(apiUrl(""), this.state).then((response) => {
          this.setState({ title: "", description: "" }, () => {
            alert("Upload was successful");
            this.props.history.push("/");
          });
        });

  };

  render() {
    return (
      <main className="main-section">
        <h1 className="main-section__title">Upload Video</h1>
        <section>
          <UploadForm
            handleSubmit={this.handleSubmit}
            id1={"title"}
            id2={"description"}
            onChange={this.handleChange}
            value1={this.state.title}
            value2={this.state.description}
          />
        </section>
      </main>
    );
  }
}

export default VideoUpload;
