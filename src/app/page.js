
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./globals.css";

export default function HomePage() {
  return (
    <Container fluid>
      <Row className='mt-5'>
        <Col className='ms-lg-5 mt-5'>
            <h1 className='mt-5'>NewJeans</h1>
          <p>is a South Korean girl group known for redefining modern K-pop with a fresh, understated approach. Rather than relying on loud concepts or heavy storytelling, their music and visuals focus on everyday emotions, nostalgia, and natural charm. Their sound blends Y2K-inspired pop, R&B, and minimal production, creating something that feels both familiar and new. This distinct identity quickly set them apart and made them one of the most talked-about acts of their generation.</p> 
        </Col>
        <Col>
            <Image src="/pics/newjeans1.jpg" rounded className="w-50 mt-5 ms-lg-5"/>  
        </Col>
      </Row>
      <Row>
        <Col className='ms-lg-5 mt-5'>
        <Image src="/pics/newjeans2.jpg" rounded className='w-25 mt-5'/>
        </Col>
      </Row>
    </Container>
  );

}