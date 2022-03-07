import React from "react";
import avatarimg from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";
import "./Form.scss";
function Form({ commentHandler, mainVideo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get comment value from form & name carries use "Kossy" as default 
    const comment = e.target.comment.value;
    //logic to check all fields filled
    comment? commentHandler(mainVideo.id, { name: "Kossy", comment: comment }): alert("Fill all fields");
   // console.log(mainVideo, comment);
    e.target.reset();
    // Axios request to our backend to add comment to our database.
  };
  return (
    <section className="form">
      <h5 className="form__title">JOIN THE CONVERSATION</h5>

      <div className="form__container">
        <div className="img-frame">
          <img className="img" src={avatarimg} alt="profile " />
        </div>
        <form id='form' className="form__box" onSubmit={handleSubmit}>
          <div className="form__row">
            <input
              className="form__input"
              type="text"
              id="comment"
              name="comment"
              placeholder="Add a new comment"
              required
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
