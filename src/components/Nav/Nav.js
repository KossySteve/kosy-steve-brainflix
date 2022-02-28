import React from "react";
import upload from "../../assets/icons/upload.svg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarimg from "../../assets/images/Mohan-muruge.jpg";
function Nav() {
  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} className="nav__logo" alt="Brainflix Logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__list-item">
          <input
            className="nav__input"
            type="text"
            name="search"
            placeholder="Search"
          />
        </li>
        <li className="nav__list-item nav__img-frame">
          <img
            className="nav__img"
            src={avatarimg}
            alt="profile picture of user"
          />
        </li>
        <li className="nav__list-item">
          <button className="nav__btn">
            <img src={upload} />
            <p className="nav__btn-text">UPLOAD</p>
            <p></p>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
