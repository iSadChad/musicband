"use client";

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Newsletter() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowModal(true);
      setForm({ name: "", email: "" }); 
    }
  }

  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <h4 className="mb-3">Join the Newsletter</h4>
          <p className="text-muted small">
            Get updates about NewJeans straight to your inbox!
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="newsletterName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="newsletterEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Button className="w-100 btn-custom" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>You're signed up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thanks for joining the newsletter!  
            You'll start receiving updates about NewJeans soon.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="w-100 btn-custom" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
