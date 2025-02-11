/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (bookId) {
      fetchComments();
    }
  }, [bookId]);

  const fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNWY3NmI3NDcwMTAwMTU4YjJiMWQiLCJpYXQiOjE3MzkxOTQxNTYsImV4cCI6MTc0MDQwMzc1Nn0.QC2xlTIWCH2wZfkEfH9OcPwE_tys2IB8VZY5WKqMR-I",
        },
      });

      if (response.ok) {
        let commentsData = await response.json();
        setComments(commentsData);
      } else {
        console.error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <div className="mt-2 p-3 border rounded bg-light">
      <h5>Commenti</h5>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              {comment.comment} - <strong>{comment.author}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessun commento disponibile.</p>
      )}
    </div>
  );
};

export default CommentArea;
