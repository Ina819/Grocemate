import React from "react";
import background from "./../assets/loginImage.png";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";
import { ContainerWithForm, LoginLeftPanel } from "../components/AppStyle";
import styles from "./../styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <ContainerWithForm>
        <LoginLeftPanel>
          <p className="h1 fw-bold">Sign in</p>

          <Form
            style={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Please add you ID here"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Please add your password here"
                style={{ textAlign: "center", borderColor: "#00632D" }}
              />
            </Form.Group>
            <view style={{ alignSelf: "flex-end" }}>
              <Button variant="success" style={{ fontSize: 16, padding: 4 }}>
                Find your ID/Password
              </Button>
            </view>
          </Form>
          <view
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-5"
          >
            <Button
              variant="success"
              style={{ fontWeight: "bold", borderRadius: 30, fontSize: 24 }}
            >
              Sign in
            </Button>
            <Button
              variant="warning"
              style={{ fontWeight: "bold", borderRadius: 30, fontSize: 24 }}
            >
              Register
            </Button>
          </view>
        </LoginLeftPanel>
        <div className={styles.rightContainer}></div>
      </ContainerWithForm>
    </div>
  );
};

export default SignIn;
