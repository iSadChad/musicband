'use client';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";  

export default function Biography() {
  return (
    <Container fluid id="biography" className="ms-lg-5 mt-5">
      <Row>
        <Col className="ms-lg-5">
          <h2>About NewJeans</h2>
          <p>
           NewJeans is a South Korean girl group formed by ADOR, a subsidiary of HYBE. The group consists of five members: Minji, Hanni, Danielle, Haerin, and Hyein. They debuted in July 2022 with the surprise release of their first EP New Jeans, which immediately drew attention for its unconventional rollout, understated visuals, and sound that contrasted sharply with prevailing K-pop trends.
          </p>
            <p>
            Rather than following the typical high-concept debut strategy, NewJeans focused on music-driven promotion and a casual, youth-oriented image. Their debut tracks, including “Attention” and “Hype Boy,” emphasized melody, groove, and emotional subtlety, drawing inspiration from 1990s and early-2000s pop and R&B. This approach resonated strongly with both domestic and international audiences, leading to rapid commercial success and widespread cultural impact.
          </p>
        </Col>
          <Col>
         <Image src="/pics/newjeans4.jpg" rounded className="w-50 mt-3" alt="NewJeans Biography Image"/>
         </Col>
      </Row>
      <Row className="mt-4">
           <Col>
          <Image src="/pics/newjeans7.jpg" rounded className="w-50 mt-3 ms-lg-5" alt="NewJeans Biography Image"/>
        </Col>
        <Col>
          <p>
            Despite their rapid rise, NewJeans has maintained a distinct artistic direction centered on authenticity and subtlety. Their success is often credited to a combination of strong musical identity, careful visual storytelling, and a willingness to deviate from established industry norms. As a result, NewJeans is widely regarded as one of the most influential K-pop acts of the early 2020s, contributing to a shift in how idol groups are introduced and perceived. 
          </p>
        </Col>
       
      </Row>  
      <Row className=" mt-4">
        <Col className="ms-lg-5 mt-5">
         <p>
            Following their debut, NewJeans continued to solidify their identity with releases such as OMG (2023) and subsequent singles, consistently performing well on Korean and global charts. Their work has been noted for its cohesive aesthetic, minimalistic production, and focus on relatable themes such as youth, connection, and emotional ambiguity. Beyond music, the group quickly became influential in fashion and pop culture, collaborating with major global brands and shaping contemporary trends.
            </p>  
        </Col>
          <Col className="ms-lg-2">
          <Image src="/pics/newjeans6.jpg" rounded className="w-25 mt-3" alt="NewJeans Biography Image"/>
        </Col>
      </Row>
    </Container>
  );      
}
