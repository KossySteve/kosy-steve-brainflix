import React from "react";

function FormInput({className}) {
  return (
    <div className="upload-form">
      <label htmlFor="videoTitle" className="upload-form__label">
        TITLE YOUR VIDEO
      </label>
      <input
        className={className}
        type="text"
        id="videoTitle"
        value={this.state}
        onChange={this.handleChange}
        name="videoTitle"
        placeholder="Add a new comment"
      />
    </div>
  );
}

export default FormInput;
