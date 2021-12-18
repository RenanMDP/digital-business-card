import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardButtons = () => {
  return (
    <Container fluid className="button--container">
      <Row>
        <Col><a href="mailto:renanmartineli@hotmail.com" target="_blank" rel="noreferrer"><Button variant="light" className="button--email"><i class="far fa-envelope"></i> Email</Button></a></Col>
        <Col><a href="https://www.linkedin.com/in/renanmdp/" target="_blank" rel="noreferrer"><Button variant="primary" className="button--linkedin"><i class="fab fa-linkedin"></i> Linkedin</Button></a></Col>
      </Row>
    </Container>
  )
};

export default CardButtons;