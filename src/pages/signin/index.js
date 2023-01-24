import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Form, Card } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import axios from "axios";
import SAlert from "../../components/Alert";

function PageSignIn() {
  let urlDomain = "http://localhost:9000/api/v1";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${urlDomain}/cms/auth/signin`, {
        email: form.email,
        password: form.password,
      });
      console.log(res);
      setErrorMsg(res.status);
    } catch (error) {
      setErrorMsg(error.response.data.msg);
    }
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          {errorMsg == "Invalid Credentials" ? (
            <SAlert message={errorMsg} type="danger"></SAlert>
          ) : (
            errorMsg == 201 && (
              <SAlert message="Berhasil Login" type="success"></SAlert>
            )
          )}

          <Card.Title className="text-center">Form Login</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email address"
              name="email"
              value={form.email}
              type="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            <TextInputWithLabel
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />

            <SButton action={handleSubmit} variant="success">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
