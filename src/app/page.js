"use client";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="newjeans1.jpg" height={500} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="newjeans2.jpg" height={500} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="newjeans3.jpg" height={500} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
