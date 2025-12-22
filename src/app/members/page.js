"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MemberCard from "../components/membercards.js";

export default function MembersPage() {
  const members = [
    {
      stageName: "Minji",
      fullName: "Kim Minji",
      birthday: "May 7, 2004",
      nationality: "Korean",
      birthplace: "Chuncheon, Gangwon, South Korea",
      position: "Rapper",
      Height: "169 cm (5’6.5”)",
      image: "/pics/minji.jpg",
      facts: [
        "Often described as the de facto leader (no official leader).",
        "Former Source Music trainee.",
      ],
    },
    {
      stageName: "Hanni",
      fullName: "Hanni Pham",
      birthday: "October 6, 2004",
      nationality: "Vietnamese-Australian",
      birthplace: "Melbourne, Australia",
      position: "Vocalist",
      Height: "162 cm (5’4”)",
      image: "/pics/Hanni.jpg",
      facts: [
        "Vietnamese name: Phạm Ngọc Hân.",
        "Some things she hates are apples that aren’t crunchy and spiders.",
      ],
    },
    {
      stageName: "Danielle",
      fullName: "Danielle Marsh",
      birthday: "April 11, 2005",
      nationality: "Korean-Australian",
      birthplace: "Newcastle, New South Wales, Australia",
      position: "Vocalist",
      Height: "165 cm (5’5″)",
      image: "/pics/danielle.jpg",
      facts: [
        "Known for bright/cheerful vibe in interviews.",
        "She began training at YG Entertainment in middle school, then began training at Source Music in early 2020.",
      ],
    },
    {
      stageName: "Haerin",
      fullName: "Kang Haerin",
      birthday: "May 15, 2006",
      nationality: "Korean",
      birthplace: "Seoul, South Korea",
      position: "Vocalist",
      Height: "164.5 cm (5’5”)",
      image: "/pics/haerin.jpg",
      facts: [
        "Often noted for calm/quiet personality in profiles.",
        "She’s a very curious person and likes learning new things.",   
      ],
    },
    {
      stageName: "Hyein",
      fullName: "Lee Hyein",
      birthday: "April 21, 2008",
      nationality: "Korean",
      birthplace: "Incheon, South Korea",
      position: "Maknae",
      Height: "Height: 170 cm (5’7″)",
      image: "/pics/hyein.jpg",
      facts: [
        "Frequently described as the youngest member (maknae).",
        "Hyein has a habit of examining people and staring at them, and cleaning before schedules.",
      ],
    },
  ];

  return (
    <Container fluid className="px-4 px-lg-5 py-5">
      <h1 className="mb-2">Members</h1>
    <Row className="g-4 justify-content-center">
    {members.map((m) => (
    <Col
      key={m.stageName}
      xs={12}
      sm={6}
      lg={4} 
      className="d-flex justify-content-center"
    >
      <MemberCard member={m} />
    </Col>
    ))}
    </Row>
    </Container>
  );
}
