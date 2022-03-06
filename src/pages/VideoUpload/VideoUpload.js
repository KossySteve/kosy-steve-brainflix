import React, { Component } from "react";
import bikeImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import "./VideoUpload.scss";
import publish from "../../assets/icons/publish.svg";
import UploadHero from "../../components/UploadHero/UploadHero";
import FormInput from "../../components/FormInput/FormInput";

export class VideoUpload extends Component {
  state = { videoTitle: "", videoDescription: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formNotValid = () => Object.values(this.state).includes("");

  handleSubmit = (e) => {
    e.preventDefault();
    this.formNotValid()
      ? alert("Failed to upload, you have errors in your form")
      : alert("Upload was successful");
  };
  render() {
    return (
      <main className="main-section">
        <h1 className="main-section__title">Upload Video</h1>
        <UploadHero />
        <section>
          <form onSubmit={this.handleSubmit} className="upload-form-container">
            <FormInput
              className={"upload-form__input"}
              labeltext={"TITLE YOUR VIDEO"}
              onChange={this.handleChange}
              id={"videoTitle"}
              value={this.state.videoTitle}
              placeholder={"Add title to your video"}
            />
            <FormInput
              className={"upload-form__input upload-form__input--lg"}
              labeltext={"ADD A VIDEO DESCRIPTION"}
              onChange={this.handleChange}
              id={"videoDescription"}
              value={this.state.videoDescription}
              placeholder={"Add a description to your video"}
            />

            <div className="btn-container">
              <Button src={publish} className={"upload-btn"} text={"PUBLISH"} />
            </div>
            <div className="btn-container--cancel">
              <button className="upload-btn--cancel">CANCEL</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default VideoUpload;
