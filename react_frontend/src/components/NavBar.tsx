import { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

import Modal from "./Modal"


export default function NavMenu() {

  let [show, SetShow] = useState<boolean>(false)
  let [search, SetSearch] = useState<string>(``)

  function handleClose(){SetShow(true)}

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="mx-5 d-lg-flex align-items-center justify-content-center navbar-expand-lg">
          <Navbar.Brand href="/">
            <img
              className="logo bg-light boder-radius rounded-circle me-3"
              src="https://cdn.pixabay.com/photo/2014/03/24/17/14/classic-295180_1280.png"
              alt="Logo"
            />
            Best Peneu
          </Navbar.Brand>
          <Navbar.Toggle className="me-4" style={{right: 0, position: "fixed"}} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="d-flex flex-row align-items-center justify-content-center">
              <Nav.Link className="px-1" href="/">Home</Nav.Link>
              <Nav.Link className="px-1" href="/contato">Contato</Nav.Link>
              <Nav.Link className="px-1" href="/sobre">Sobre</Nav.Link>
            </Nav>

            <div className="ms-2">
              <Form className="d-flex flex-row">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(event)=> {SetSearch(event.target.value)}}
                />
                <Button onClick={handleClose} variant="outline-success">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {show == true? (<Modal changeState={SetShow} search={search}></Modal>): (<></>)}

    </>
  );
}
