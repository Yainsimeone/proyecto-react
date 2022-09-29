import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
const src = "https://us.123rf.com/450wm/findriyani/findriyani1902/findriyani190200477/116365758-vector-logo-de-smartphone.jpg?ver=6"


const Navbar1 =() =>{
    return(
        <Navbar bg="secondary" expand="lg">
        <Container fluid>
            <img  src ={src} className="logo"/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Productos</Nav.Link>
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Televisores
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Destacados
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <CartWidget />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Navbar1;
