"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumCard from "../components/albumcard";

export default function Album() {
  const releases = [
    {
      title: "New Jeans",
      type: "EP",
      year: "2022",
      cover: "/album/New_Jeans_(EP).jpg",
      tracks: ["Attention", "Hype Boy", "Cookie", "Hurt"],
      mvLinks: [
        { label: "Attention", url: "https://www.youtube.com/watch?v=js1CtxSY38I" },
        { label: "Hype Boy", url: "https://www.youtube.com/watch?v=11cta61wi0g" },
      ],
    },
    {
      title: "OMG",
      type: "Single Album",
      year: "2023",
      cover: "/album/NewJeans_OMG_cover.jpg",
      tracks: ["OMG", "Ditto"],
      mvLinks: [
        { label: "OMG", url: "https://www.youtube.com/watch?v=_ZAgIHmHLdc" },
        { label: "Ditto", url: "https://www.youtube.com/watch?v=pSUydWEqKwE" },
      ],
    },
    {
      title: "Get Up",
      type: "EP",
      year: "2023",
      cover: "/album/NewJeans_-_Get_Up.png",
      tracks: ["New Jeans", "Super Shy", "ETA", "Cool With You", "Get Up", "ASAP"],
      mvLinks: [
        { label: "Super Shy", url: "https://www.youtube.com/watch?v=ArmDp-zijuc" },
        { label: "ETA", url: "https://www.youtube.com/watch?v=jOTfBlKSQYY" },
      ],
    },
    {
        title: "How Sweet",
      type: "Single",
      year: "2024",
      cover: "/album/NewJeans_-_How_Sweet.png",
      tracks: ["How Sweet"],
      mvLinks: [
        { label: "How Sweet", url: "https://www.youtube.com/watch?v=Q3K0TOvTOno&pp=ygUSbmV3amVhbnMgaG93IHN3ZWV0" },
      ],
    },
    {
      title: "Supernatural",
      type: "Single",
      year: "2024",
      cover: "/album/NewJeans_-_Supernatural.png",
      tracks: ["Supernatural"],
      mvLinks: [
        { label: "Supernatural", url: "https://www.youtube.com/watch?v=ZncbtRo7RXs&pp=ygUVbmV3amVhbnMgc3VwZXJuYXR1cmFs" },
      ],
    }
  ];

  return (
    <Container fluid className="px-4 px-lg-5 py-5">
      <h1 className="mb-4">Discography</h1>
      <p className="text-muted mb-4">
        Hover over a release to flip the cover and see the tracklist.
      </p>

      <Row className="g-4">
  {releases.map((r) => (
    <Col key={`${r.title}-${r.year}`} xs={12} sm={6} lg={4} className="d-flex">
      <AlbumCard {...r} className="flex-fill" />
    </Col>
  ))}
</Row>
    </Container>
  );
}
