// CommentForm.js
import React, { useState } from 'react';
import './CommentForm.css'

const CommentForm = ({ onAddComment }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = { author, text };

    try {
      const response = await fetch('http://localhost:5000/CommentForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        // If the comment is successfully saved on the server, update the UI
        const data = await response.json();
        onAddComment(data.comment);
        setAuthor('');
        setText('');
      } else {
        console.error('Failed to save comment on the server');
      }
    } catch (error) {
      console.error('Error sending comment to the server:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <label>
        Comment:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;