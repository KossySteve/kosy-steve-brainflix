import React, { Component } from "react";
import bikeImg from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import "./VideoUpload.scss";
import publish from "../../assets/icons/publish.svg";
import UploadHero from "../../components/UploadHero/UploadHero";
import FormInput from "../../components/FormInput/FormInput";

export class VideoUpload extends Component {
 state = {videoTitle: "", videoDescription: ""}
  handleChange = ()=> {}
  render() {
    return (
      <main className="main-section">
        <h1 className="main-section__title">Upload Video</h1>
       <UploadHero />
        <section>
          <form onSubmit={this.handleSubmit} className="upload-form-container">
            
      <FormInput labeltext={"ADD A VIDEO DESCRIPTION"} className={"upload-form__input"} onChange={this.handleChange} id={"description"} value={this.state} placeholder={"Add a description to your video"}/>
           
           
            <FormInput className={"upload-form__input upload-form__input--lg"}/>
           
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
