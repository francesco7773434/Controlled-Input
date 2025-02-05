import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Container fluid className="mt-5">
      <Row>
        {books.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
