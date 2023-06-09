import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import buyIcon from "../assets/Buy.png";

function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: "#00632d" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <img
              src="https://img.icons8.com/material-rounded/24/null/menu--v1.png"
              onClick={handleShow}
              alt="menu-icon"
              style={{ cursor: "pointer" }}
            /> */}

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Shop
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ backgroundColor: "#00632d" }}
          />
          <Button style={{ backgroundColor: "#00632d" }}>
            <img src={buyIcon} width="100%" />
          </Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Header;
