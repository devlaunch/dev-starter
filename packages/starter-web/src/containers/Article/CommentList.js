import Comment from "./Comment";
import React from "react";

const CommentList = props => (
  <div>
    {props.comments.map(comment => (
      <Comment
        comment={comment}
        currentUser={props.currentUser}
        slug={props.slug}
        key={comment.id}
      />
    ))}
  </div>
);

export default CommentList;
