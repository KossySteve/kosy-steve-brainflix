import React from "react";
import avatarimg from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";
import './Form.scss'
function Form() {
  return (
    <section className="form">
      <h5 className="form__title">JOIN THE CONVERSATION</h5>

      <div className="form__container">
        <div className="img-frame">
          <img className="img" src={avatarimg} alt="profile " />
        </div>
        <form className="form__box">
          <div className="form__row">
            <input
              className="form__input"
              type="text"
              id="name"
              name="name"
              placeholder="Add a new comment"
            />
          </div>
          <div className="form__row">
            <button className="btn" type="submit">
              <img src={addComment} alt="comment icon" />
              <p>COMMENT</p>
              <p></p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
