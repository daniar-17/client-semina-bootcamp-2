import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import SButton from "../../components/Button";
import SBreadCrumb from "../../components/Breadcrumb";
import Snavbar from "../../components/Navbar";
import { config } from "../../configs";
import axios from "axios";

export default function PageCategories() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);
  console.log("data");
  console.log(data);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <Snavbar />

      <Container className="mt-4">
        {/* <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb> */}
        <SBreadCrumb textSecound="Categories" />
        <SButton>Tambah</SButton>

        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
