import React from "react";
import './Comments.scss'

function Comments({ mainVideo, deleteCommentHandler }) {


  return (
    <section className="post-section">
      {mainVideo.comments.map((comment) => (
        <div key={comment.timestamp}  className="post-container">
          <div>
            <span className="post__image"></span>
          </div>
          <div className="post">
            <div className="post__box">
              <h3 className="post__heading">{comment.name}</h3>
              <p className="post__time">
                {new Date(comment.timestamp).toISOString().slice(0, 10)}
              </p>
            </div>
            <p className="post__text">{comment.comment} <br/><i onClick={()=>deleteCommentHandler(mainVideo.id, comment.timestamp)} class="post__delete-icon fa-solid fa-trash-can"></i></p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comments;
