import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardButtons from "./CardButtons";
import CardText from "./CardText";
import CardFooter from "./CardFooter";


const CardInfo = () => {
  return (
    <Container fluid>
      <Card className="card--main">
        <CardImg />
        <Card.Body className="card--body">
          <CardTitle />
          <CardButtons />
          <CardText />
        </Card.Body>
        <CardFooter />
      </Card>
    </Container>
  );
};

export default CardInfo;