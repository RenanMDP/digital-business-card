import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardFooter = () => {
  return (
    <Card.Footer className="card--footer">
      <Container fluid className="footer-container">
        <Row>
          <Col><i class="fab fa-twitter-square icon"></i></Col>
          <Col><i class="fab fa-facebook-square icon"></i></Col>
          <Col><i class="fab fa-instagram-square icon"></i></Col>
          <Col><i class="fab fa-github-square icon"></i></Col>
        </Row>
      </Container>
    </Card.Footer>
  );
};

export default CardFooter;