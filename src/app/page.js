
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./globals.css";
import Newsletter from "./components/newsletter.js"; 
import { Card, CardBody } from "react-bootstrap";


export default function HomePage() {
  return (
    <Container fluid className="wide-container px-4 py-5">
      <Card className="home-card p-4 mb-10">
        <CardBody>
        <Row>
          <Col xs={12}>
            <h1 className="display-1">NewJeans</h1>
          </Col>
        </Row>

        <Row className="align-items-start">
          <Col lg={7}>
            <Image src="/pics/newjeans2.jpg" rounded fluid className="mt-5"/>
          </Col>
          <Col lg={{span: 4, offset: 1 }} >
            <Image src="/pics/newjeans9.jpg" rounded fluid className="mt-5"/>
          </Col>
        </Row>

      <Row className="align-items-start g-4">
        <Col lg={9}>
        <Row className="mt-5">
          <p>NewJeans is a South Korean girl group known for redefining modern K-pop with a fresh, understated approach. Rather than relying on loud concepts or heavy storytelling, their music and visuals focus on everyday emotions, nostalgia, and natural charm. Their sound blends Y2K-inspired pop, R&B, and minimal production, creating something that feels both familiar and new. This distinct identity quickly set them apart and made them one of the most talked-about acts of their generation.</p> 
          </Row>
        </Col>
        
      </Row>
      <Row className='g-4 mt-5'>
        <Col lg={6}>
        <Image src="/pics/newjeans1.jpg" rounded fluid/>
        </Col>
        <Col lg={{span: 5, offset: 1 }} className='mt-5'>
        <Image src="/pics/newjeans8.jpg" rounded fluid/>
        </Col>
      </Row>
      </CardBody>
    </Card>
       <Row className="align-items-start g-4 mt-5">
        <Col xs={12} sm={8} md={6} lg={4} className="mt-5">
          <Newsletter/>
        </Col>
      </Row>
</Container>
  );

}   