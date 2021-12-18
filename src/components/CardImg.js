import React from "react";
import Card from "react-bootstrap/Card";
import pic from "../images/pic.jpg";

const CardImg = () => {
  return (
    <Card.Img 
    className="card--img"
    variant="top" 
    src={pic} 
    fluid
    />
  );
};

export default CardImg;