import React from 'react';
import Card from 'react-bootstrap/Card';

const CardTitle = () => {
  return (
    <>
      <Card.Title className="card--title">Renan Martineli de Paula</Card.Title>
      <Card.Subtitle className="card--subtitle1">Full-stack Web Developer</Card.Subtitle>
      <Card.Subtitle className="card--subtitle2"><a href="https://github.com/RenanMDP" target="_blank" rel="noreferrer">https://github.com/RenanMDP</a></Card.Subtitle>
    </>
  );
};

export default CardTitle;