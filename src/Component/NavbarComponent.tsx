import logo from "../assets/logo.png";
import "../Component/styles.css";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="px-0 nav-bg">
      <Navbar.Brand href="#home">
        {" "}
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="navLink">
            Home
          </Nav.Link>
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
    </Navbar>
  );
};
export default NavbarComponent;
