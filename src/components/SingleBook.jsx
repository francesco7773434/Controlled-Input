import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { book } = this.props;
    return (
      <Card className={`bg-dark border-3 w-50 ${this.state.selected ? "border border-danger" : ""}`} onClick={this.toggleSelect}>
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={(e) => {
            e.stopPropagation();
            this.toggleSelect();
          }}
        />
        <Card.Body className="bg-dark">
          <Card.Title className="text-white">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
