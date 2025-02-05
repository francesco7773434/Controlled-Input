import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>BookStore</h5>
            <p>Il tuo negozio di libri online. Scopri le ultime novità e i grandi classici.</p>
          </Col>
          <Col md={3}>
            <h6>Link utili</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contatti
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Seguici</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© 2025 BookStore. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
