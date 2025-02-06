import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNWY3NmI3NDcwMTAwMTU4YjJiMWQiLCJpYXQiOjE3Mzg4NTYwNjksImV4cCI6MTc0MDA2NTY2OX0.xXhLr_jMRf1_CpyDAG86IHZugFr0Ow_JgNrh_IxRp0s", // Inserisci la tua API Key
        },
      });

      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments });
      } else {
        console.error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  render() {
    return (
      <div className="mt-2 p-3 border rounded bg-light">
        <h5>Commenti</h5>
        {this.state.comments.length > 0 ? (
          <ul>
            {this.state.comments.map((comment) => (
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
  }
}

export default CommentArea;
