import React from "react";

function FormInput({className, labeltext, onChange, id, value, placeholder, type}) {
  return (
    <div className="upload-form">
      <label htmlFor={id} className="upload-form__label">
        {labeltext}
      </label>
      <input
        className={className}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={id}
        placeholder={placeholder}
      />
    </div>

  );
}

export default FormInput;
