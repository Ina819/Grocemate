import React from "react";
import { Button, Form } from "react-bootstrap";
import { ContainerWithForm, LoginLeftPanel } from "../components/AppStyle";

const RegisterAdmin = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LoginLeftPanel>
        <p className="h1 fw-bold">Register Admin</p>
        <Form style={{ width: "60%" }}>
          <Form.Group>
            <Form.Label className="fw-bold">Admin Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              style={{ textAlign: "center", borderColor: "#00632D" }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              style={{ textAlign: "center", borderColor: "#00632D" }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">User name(ID):</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ID"
              style={{ textAlign: "center", borderColor: "#00632D" }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              style={{ textAlign: "center", borderColor: "#00632D" }}
            />
          </Form.Group>
        </Form>
        <Button
          variant="warning"
          style={{
            fontWeight: "bold",
            borderRadius: 30,
            fontSize: 24,
            marginTop: 30,
          }}
        >
          Register
        </Button>
      </LoginLeftPanel>
    </div>
  );
};

export default RegisterAdmin;
