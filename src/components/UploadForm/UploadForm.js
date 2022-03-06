import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import publish from "../../assets/icons/publish.svg";
import './UploadForm.scss'

function UploadForm({onChange, id1, id2, value1, value2, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="upload-form-container">
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

      <div className="btn-container">
        <Button src={publish} className={"upload-btn"} text={"PUBLISH"} />
      </div>
      <div className="btn-container--cancel">
        <button className="upload-btn--cancel">CANCEL</button>
      </div>
    </form>
  );
}

export default UploadForm;
