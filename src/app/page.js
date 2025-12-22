
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./globals.css";

export default function HomePage() {
  return (
    <Container fluid className="wide-container px-4 py-5">
      <Row>
          <Col lg={9}>
            <Image src="/pics/newjeans2.jpg" rounded fluid className="mt-5"/>  
        </Col>
        </Row>
      <Row className="align-items-start g-4">
      
        <Col>
            <h1>NewJeans</h1>
          <p>is a South Korean girl group known for redefining modern K-pop with a fresh, understated approach. Rather than relying on loud concepts or heavy storytelling, their music and visuals focus on everyday emotions, nostalgia, and natural charm. Their sound blends Y2K-inspired pop, R&B, and minimal production, creating something that feels both familiar and new. This distinct identity quickly set them apart and made them one of the most talked-about acts of their generation.</p> 
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
    </Container>
  );

}