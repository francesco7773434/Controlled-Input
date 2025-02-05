import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class Books extends Component {
  state = { books: [] };
  render() {
    return (
      <Container fluid className="mt-5">
        <div>
          <Button className="bg-warning m-4" onClick={() => this.setState({ books: fantasy })}>
            fantasy
          </Button>
          <Button className="bg-success m-4" onClick={() => this.setState({ books: history })}>
            history
          </Button>
          <Button className="bg-danger m-4" onClick={() => this.setState({ books: horror })}>
            horror
          </Button>
          <Button className="bg-info m-4" onClick={() => this.setState({ books: romance })}>
            romance
          </Button>
          <Button className="bg-dark m-4" onClick={() => this.setState({ books: scifi })}>
            scifi
          </Button>
        </div>
        <Row>
          {this.state.books.map((book) => {
            return (
              <Col className="" key={`book-${book.asin}`} sm={6} md={4} lg={3}>
                <Card className="bg-dark border-0 ">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body className="bg-dark">
                    <Card.Title className="text-white">{book.title}</Card.Title>
                    <Card.Text className="text-white">{book.category}</Card.Text>
                    <Card.Text className="text-white">{book.price}$</Card.Text>
                    <Button className="bg-warning">Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Books;
