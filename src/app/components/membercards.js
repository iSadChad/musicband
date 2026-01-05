"use client";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function MemberCard({ member }) {
  return (
    <Card className="member-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={member.image}
        alt={`${member.stageName} photo`}
        className="member-img"
      />
      <Card.Body>
        <Card.Title className="mb-1">{member.stageName}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{member.fullName}</Card.Subtitle>

        <ListGroup className="small">
          <ListGroup.Item>
            <strong>Birthday:</strong> {member.birthday}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Birthplace:</strong> {member.birthplace}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Nationality:</strong> {member.nationality}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Position:</strong> {member.position}
          </ListGroup.Item>
        </ListGroup>

        {member.facts?.length > 0 && (
          <>
            <div className="mt-3 fw-semibold">Facts</div>
            <ul className="mb-0 small">
              {member.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
