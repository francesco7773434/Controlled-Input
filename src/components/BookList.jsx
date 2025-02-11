import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const selectBook = (asin) => {
    setSelectedBookId(asin);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <Row>
            {books.map((book) => (
              <Col md={4} key={book.asin}>
                <SingleBook book={book} onSelect={selectBook} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea bookId={selectedBookId} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
