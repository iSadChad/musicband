"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="mt-5 py-4 ">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} NewJeans
            </p>
          </Col>

          <Col md={6} className="text-md-end">
            <a
              href="https://www.instagram.com/newjeans_official/"
              target="_blank"
              className="me-3 text-decoration-none text-muted"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@NewJeans_official"
              target="_blank"
              className="text-decoration-none text-muted"
            >
              YouTube
            </a>
            <a
                href="https://twitter.com/NewJeans_ADOR"
                target="_blank"
                className="ms-3 text-decoration-none text-muted"
            > 
                Twitter
            </a>
            <a
                href="https://www.tiktok.com/@newjeans_official"
                target="_blank"
                className="ms-3 text-decoration-none text-muted"
            > 
                TikTok
            </a>
             <a
                href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                target="_blank"
                className="ms-3 text-decoration-none text-muted"
            > 
                Spotify
            </a>            
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
