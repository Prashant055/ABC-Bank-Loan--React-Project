import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Registration Form
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/registration">
            Registration
          </Nav.Link>
          <Nav.Link as={Link} to="/adminLogin">
            Admin Login
          </Nav.Link>
          <Nav.Link as={Link} to="/userLogin">
            UserLogin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
