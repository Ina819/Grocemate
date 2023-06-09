import React from "react";
import { Button, Form } from "react-bootstrap";
import background from "./../assets/signupImage.png";
import { ContainerWithForm, LoginLeftPanel } from "../components/AppStyle";
import styles from "./../styles/Register.module.css";

const Register = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <ContainerWithForm>
        <LoginLeftPanel>
          <p className="h1 fw-bold">Welcome!</p>
          <p className="h6">Let's get started with your 14days free trial</p>
          <Form style={{ width: "60%" }}>
            <Form.Group>
              <Form.Label className="fw-bold">Name:</Form.Label>
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
        <div className={styles.rightContainer}></div>
      </ContainerWithForm>
    </div>
  );
};

export default Register;
