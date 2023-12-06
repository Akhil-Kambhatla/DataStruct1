import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const ParentComponent = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h1>Comments Section</h1>
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default ParentComponent;