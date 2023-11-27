import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import EmployeeList from "./EmployeeList";
import NewEmployeeModal from "./NewEmployeeModal";
import axios from "axios";
import { API_URL } from "../constants";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    resetState();
  }, []);

  const getEmployee = () => {
    axios.get(API_URL).then((res) => setEmployee(res.data));
  };

  const resetState = () => {
    getEmployee();
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <EmployeeList employees={employee} resetState={resetState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewEmployeeModal create={true} resetState={resetState} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
