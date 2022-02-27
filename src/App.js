import { Component } from "react";
import logo from "./assets/logo/BrainFlix-logo.svg";
import avatarimg from "./assets/images/Mohan-muruge.jpg";
import "./App.css";
import { maxVideoList } from "./data/video-details";
import { minVideoList } from "./data/videos";

class App extends Component {
  state = { maxVideoList: maxVideoList, minVideoList: minVideoList };

  render() {
    // const filteredPlants = plantsData.filter((plant) => plant.id !== this.state.activePlant.id);

    // const { name, age, description, avatar: image } = this.state.activePlant;
    console.log(this.state);
    return (
      <div>
        <header>
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
                <button className="nav__btn">Shows</button>
              </li>
            </ul>
          </nav>
          <section className="hero">
            <video className="hero__video" poster={logo} controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </section>
          <main>
            <div className="video-info">
              <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
              <div className="video-info__details">
                <div className="video-details">
                  <p>By Red Crow</p>
                  <p>07/11/2021</p>
                </div>
                <div className="video-reactions">
                  <p>1,001,023</p>
                  <p>110,985</p>
                </div>
              </div>
              <article className="video-info__description">
                  <p>
                    On a gusty day in Southern Utah, a group of 25 daring
                    mountain bikers blew the doors off what is possible on two
                    wheels, unleashing some of the biggest moments the sport has
                    ever seen. While mother nature only allowed for one full run
                    before the conditions made it impossible to ride, that was
                    all that was needed for event veteran Kyle Strait, who won
                    the event for the second time -- eight years after his first
                    Red Cow Rampage title
                  </p>
                </article>
            </div>
          </main>
          <section className="form">
            <h1 className="form__title">Join the Conversation</h1>
            <div className="form__container">
              <div className="img-frame">
                <img
                  className="img"
                  src={avatarimg}
                  alt="profile picture of user"
                />
              </div>
              <form>
                <div className="form__row">
                  <input
                    className="form__input"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form__row">
                  <textarea
                    className="form__textarea"
                    name="name"
                    id="comment"
                    placeholder="Add a new comment"
                  ></textarea>
                </div>
                <div className="form__row">
                  <button className="btn" type="submit">
                    COMMENT
                  </button>
                </div>
              </form>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
