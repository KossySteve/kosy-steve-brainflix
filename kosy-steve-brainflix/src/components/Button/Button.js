import React from "react";

function Button({src, className, text}) {
  return (
    <button className={className}>
      <img src={src} alt="icon" />
      <p className="nav__btn-text">{text}</p>
      <p></p>
    </button>
  );
}

export default Button;
