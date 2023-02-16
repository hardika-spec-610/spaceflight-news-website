import logo from "../assets/logo.png";
import "../Component/styles.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="px-0 nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="logo" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-dark">
          <Nav className="mr-auto">
            <Link to="/">
              <span
                className={
                  location.pathname === "/tv-shows"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </span>
            </Link>
            {/* <Nav.Link href="#home" className="navLink">
              Home
            </Nav.Link> */}
            <Nav.Link href="#link" className="navLink">
              News
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Civil
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Commercial
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Military
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Sponsered
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Advertise
            </Nav.Link>
            <Nav.Link href="#link" className="navLink">
              Business
            </Nav.Link>
          </Nav>
          {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
