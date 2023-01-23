import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Button, Form, Card } from "react-bootstrap";
// import SButton from "../../components/Button";

function PageSignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form SignIn</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="success">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
