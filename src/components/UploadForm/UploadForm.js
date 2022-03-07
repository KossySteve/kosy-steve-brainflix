import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import publish from "../../assets/icons/publish.svg";
import "./UploadForm.scss";
import UploadHero from "../UploadHero/UploadHero";

function UploadForm({ onChange, id1, id2, value1, value2, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="upload-form-container">
     <div className= "upload-form-box">
     <UploadHero />
      <div className= "upload-form__input-box">
      <FormInput
        className={"upload-form__input"}
        labeltext={"TITLE YOUR VIDEO"}
        onChange={onChange}
        id={id1}
        value={value1}
        placeholder={"Add title to your video"}
      />
      <FormInput
        className={"upload-form__input upload-form__input--lg"}
        labeltext={"ADD A VIDEO DESCRIPTION"}
        onChange={onChange}
        id={id2}
        value={value2}
        placeholder={"Add a description to your video"}
      />
      </div>
     </div>
      <div className="upload">
        <div className="upload__btn-container">
          <Button src={publish} className={"upload__btn"} text={"PUBLISH"} />
        </div>
        <div className="upload__btn-container--cancel">
          <button className="upload__btn--cancel">CANCEL</button>
        </div>
      </div>
    </form>
  );
}

export default UploadForm;
