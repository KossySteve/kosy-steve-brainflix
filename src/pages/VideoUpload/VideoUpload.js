import React, { Component } from "react";
import bikeImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import "./VideoUpload.scss";
import publish from "../../assets/icons/publish.svg";

export class VideoUpload extends Component {
 state = {videoTitle: "", videoDescription: ""}
  uploadVideo = ()=> {}
  render() {
    return (
      <main className="main-section">
        <h1 className="main-section__title">Upload Video</h1>
        <section className="hero-container">
          <h4 className="hero__heading">VIDEO THUMBNAIL</h4>
          <img className="hero_container__img" src={bikeImg}></img>
        </section>
        <section>
          <form className="upload-form-container">
            <div className="upload-form">
              <label htmlFor="videoTitle" className="upload-form__label">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload-form__input"
                type="text"
                id="videoTitle"
                value={this.state}
                onChange={this.uploadVideo}
                name="videoTitle"
                placeholder="Add a new comment"
              />
            </div>
            <div className="upload-form">
              <label htmlFor="description" className="upload-form__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <input
                className="upload-form__input--lg"
                type="text"
                id="description"
                value={this.state}
                onChange={this.uploadVideo}
                name="description"
                placeholder="Add a description to your video"
              />
            </div>
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
