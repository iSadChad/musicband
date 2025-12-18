
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./globals.css";

export default function HomePage() {
  return (
    <Container className='mt-5'>
      <Row className='mt-5'>
        <Col>
          <Image src="/pics/newjeans1.jpg" rounded className='w-50 mt-5'/>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5'>
            <h1 className='mt-5'>NewJeans</h1>
          <p>NewJeans is a South Korean girl group formed by ADOR, a subsidiary of HYBE Corporation. The group consists of five members: Minji, Hanni, Danielle, Haerin, and Hyein. They officially debuted on August 1, 2022, with the release of their self-titled EP "New Jeans," which includes the hit singles "Attention" and "Hype Boy."</p> 
        </Col>
        <Col className='text-center mt-5'>
        <Image src="/pics/newjeans2.jpg" rounded className='w-100 mt-5'/>
        </Col>
      </Row>
    </Container>
  );
}


  