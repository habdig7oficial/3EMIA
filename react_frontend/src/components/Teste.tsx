import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;











































<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="/">
            <img
              className="logo bg-light boder-radius rounded-circle me-3"
              src="https://cdn.pixabay.com/photo/2014/03/24/17/14/classic-295180_1280.png"
              alt="Logo"
            />
            Best Peneu
          </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="d-flex flex-row align-items-center justify-content-center">
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
                  onChange={(event)=> {SetSearch(event.target.value)}}
                />
                <Button onClick={handleClose} variant="outline-success">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
</Container>
</Navbar>