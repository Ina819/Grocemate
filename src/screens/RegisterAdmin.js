import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LoginLeftPanel } from "../components/AppStyle";

const RegisterAdmin = () => {
  const [order, setOrder] = useState(1);
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
        {order === 1 ? (
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="warning"
                style={{
                  fontWeight: "bold",
                  borderRadius: 30,
                  fontSize: 24,
                  marginTop: 30,
                }}
                onClick={() => setOrder(2)}
              >
                Register
              </Button>
            </div>
          </Form>
        ) : (
          <Form style={{ width: "60%" }}>
            <Form.Group>
              <Form.Label className="fw-bold">
                Admin verification code
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Add your verification code"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="success"
                style={{
                  fontWeight: "bold",
                  borderRadius: 30,
                  fontSize: 12,
                  marginTop: 30,
                }}
              >
                Need help?
              </Button>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="warning"
                style={{
                  fontWeight: "bold",
                  borderRadius: 30,
                  fontSize: 24,
                  marginTop: 30,
                }}
              >
                Confirm your code
              </Button>
            </div>
          </Form>
        )}
      </LoginLeftPanel>
    </div>
  );
};

export default RegisterAdmin;
