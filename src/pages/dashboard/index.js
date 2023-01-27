import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";

export default function Dashboard() {
  return (
    <>
      <Container className="mt-4">
        <SBreadCrumb />
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
