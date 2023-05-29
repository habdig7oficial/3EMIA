import { Container, Nav, Navbar, Form, Button, Modal } from "react-bootstrap";

export default function NavMenu() {

  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="mx-5 d-flex flex-row align-items-center justify-content-center">
          <Navbar.Brand href="#home">
            <img
              className="logo bg-light boder-radius rounded-circle me-3"
              src="https://cdn.pixabay.com/photo/2014/03/24/17/14/classic-295180_1280.png"
              alt="Logo"
            />
            Best Peneu
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>

          <div className="ms-2">
            <Form className="d-flex flex-row">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </Navbar>
    </>
  );
}
