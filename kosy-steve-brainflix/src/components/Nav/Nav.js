import React from "react";
import upload from "../../assets/icons/upload.svg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarimg from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import searchIcon from "../../assets/icons/search.svg";
function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} className="nav__logo" alt="Brainflix Logo" />
      </Link>
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item--input">
          <div>
            <img className="nav__btn-icon" src={searchIcon} />
          </div>
          <input
            className="nav__input"
            type="text"
            name="search"
            placeholder="Search"
          />
        </li>
        <li className="nav__list-item nav__img-frame">
          <img className="nav__img" src={avatarimg} alt="profile" />
        </li>
        <li className="nav__list-item">
          <Link to="/upload">
            <Button src={upload} className={"nav__btn"} text={"UPLOAD"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
