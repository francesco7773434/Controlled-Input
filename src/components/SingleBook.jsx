import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelect(book.asin);
  };

  return (
    <Card onClick={handleClick} style={{ border: selected ? "3px solid red" : "1px solid gray", cursor: "pointer" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
