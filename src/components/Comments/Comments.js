import React from "react";

function Comments() {
  return (
    <section className="post-section">
      <div className="post-container">
        <div>
          <span className="post__image"></span>
        </div>
        <div className="post">
          <div className="post__box">
            <h3 className="post__heading">Connor Walton</h3>
            <p className="post__time">2021-02-17</p>
          </div>
          <p className="post__text">
            This is art. This is inexplicable magic expressed in the purest way,
            everything that makes up this majestic work deserves reverence. Let
            us appreciate this for what it is and what it contains.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Comments;
