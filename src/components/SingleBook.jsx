import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card className={this.state.selected ? "border-danger" : "border-2"}>
        <Card.Img variant="top" src={this.props.book.img} alt={this.props.book.title} onClick={() => this.setState({ selected: true })} />
        <Card.Body className="bg-dark">
          <Card.Title className="text-white">{this.props.book.title}</Card.Title>
        </Card.Body>
        {this.state.selected && <CommentArea bookId={this.props.book.asin} />}
      </Card>
    );
  }
}

export default SingleBook;
