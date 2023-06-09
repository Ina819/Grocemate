import React from "react";
import { ContainerWithForm, LoginLeftPanel } from "../components/AppStyle";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styles from "./../styles/AdminSignIn.module.css";

const AdminSignin = () => {
  return (
    <div style={{ backgroundColor: "#00632d", height: "100vh" }}>
      <ContainerWithForm>
        <div className={styles.signInContainer}>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <p className="h1 fw-bold">Admin Sign in</p>
            <Form.Group className="mb-1 mt-5" style={{ width: "100%" }}>
              <Form.Control
                type="text"
                placeholder="Please add you ID here"
                style={{
                  textAlign: "center",
                  borderColor: "#00632D",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mt-3"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
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
            <view
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
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
          </Form>
        </div>
      </ContainerWithForm>
    </div>
  );
};

export default AdminSignin;
