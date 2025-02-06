import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container fluid className="mt-5">
      <Row>
        {props.books.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
