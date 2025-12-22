'use client';

import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../globals.css";

export default function HomePage() {
  return (
    <Container fluid className="wide-container px-4 py-5">
      <Row>
          <Col lg={9}>
            <Image src="/pics/newjeans3.jpg" rounded fluid className="mt-5"/>  
        </Col>
        </Row>
    </Container>

)
}