import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const CardText = () => {
  return (
    <Container fluid className="text--container">
      <Row className="text--row">
        <Col>
          <Card.Title className="text--title">About</Card.Title>
          <Card.Text className="card--text">
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </Card.Text>
        </Col>
      </Row>
      <Row className="text--row">
        <Col>
          <Card.Title className="text--title">Interests</Card.Title>
          <Card.Text className="card--text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
}

export default CardText;