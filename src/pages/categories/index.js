import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table, Spinner } from "react-bootstrap";
import SButton from "../../components/Button";
import SBreadCrumb from "../../components/Breadcrumb";
import Snavbar from "../../components/Navbar";
import { config } from "../../configs";
import axios from "axios";

export default function PageCategories() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsLoading(false);
        setData(res.data.data);
      } catch (err) {
        setIsLoading(false);
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
        <SBreadCrumb textSecound="Categories" />
        <SButton action={() => navigate("/categories/create")}>Tambah</SButton>

        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={data.length + 1} style={{ textAlign: "center" }}>
                  <div className="flex items-center justify-center">
                    <Spinner animation="border" variant="light" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
