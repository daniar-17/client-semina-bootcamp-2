import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Card } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import SForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`/cms/auth/signin`, form);
      dispatch(userLogin(res.data.data.token, res.data.data.role));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        type: "danger",
        message: error?.response?.data?.msg ?? "Internal Server Error",
      });
    }
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          {alert.status && (
            <SAlert message={alert.message} type={alert.type}></SAlert>
          )}

          <Card.Title className="text-center">Form Login</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
