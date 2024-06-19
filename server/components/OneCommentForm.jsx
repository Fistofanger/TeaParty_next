const React = require('react');

function OneCommentForm({ comment }) {
  return (
    <div className="OneCommentForm flex">

    <div className="authorTeaCard">
        <img src={comment.User.avatar} alt="avatar author" />
      <p>{comment.User.userName}</p>
    </div>

      <p>💬{comment.commentText}</p>
    </div>
    
  );
}

module.exports = OneCommentForm;