"use client";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AlbumCard({ title, type, year, cover, tracks, mvLinks }) {
  return (
    <div className="flip-card h-100">
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front">
          <Card className="h-100 shadow-sm album-card">
            <Card.Img variant="top" src={cover} alt={`${title} cover`} className="album-cover"/>
            <Card.Body>
              <Card.Title className="mb-1">{title}</Card.Title>
              <Card.Text className="text-muted mb-0">
                {type} • {year}
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className="flip-card-face flip-card-back">
          <Card className="h-100 shadow-sm album-card">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-1">{title}</Card.Title>
              <Card.Text className="text-muted mb-3">
                {type} • {year}
              </Card.Text>

              <div className="mb-3">
                <div className="fw-semibold mb-2">Tracks</div>
                <ol className="mb-0 ps-3">
                  {tracks.map((t, idx) => (
                    <li key={`${title}-t-${idx}`} className="mb-1">
                      {t}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-auto d-grid gap-2">
                {mvLinks?.map((mv, idx) => (
                  <Button
                    key={`${title}-mv-${idx}`}
                    href={mv.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                  >
                    Watch: {mv.label}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
