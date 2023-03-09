import './navbar.css';
import Logo from '../assets/img/aceite-esencial.png'
import CartWidget from './cartWidget';
import {NavLink, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';

function Header(){
    return (
        <>
          {['xl'].map((expand) => (
            <Navbar key={expand} expand={expand} className="header">
              <Container fluid className='containerHeader'>
                <div className="logo">
                    <a href='/'>
                        <img className='headerLogo' alt='logotipo' src={Logo}></img>
                        <p className='nombreBrand'> BachShop </p>
                    </a>
                </div>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center pe-3 header liHeader">
                        <NavLink to='/' className='menuEnlace menu'> INICIO </NavLink>
                        <Link> 
                          <NavDropdown title="REMEDIO INDIVIDUAL" id="basic-nav-dropdown" className='menuEnlaceDrop'> 
                            <NavDropdown.Item>
                              <Link to='/group-1'> Temor, miedo y preocupación </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-2'> Incertidumbre e inseguridad </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-3'> Falta de interés por el presente </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-4'> Soledad </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-5'> Hipersensibilidad </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-6'> Desesperación, desánimo y abatimiento </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <Link to='/group-7'> Sufrimiento y preocupación por los demás </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Link>
                        <NavLink to='/gotero-personalizado' className='menuEnlace menu'> CONJUNTO DE REMEDIOS </NavLink>
                        <NavLink to='/caja-completa' className='menuEnlace menu'> CAJAS DE REMEDIOS </NavLink>
                        <NavLink to='/contacto' className='menuEnlace menu'> CONTACTO </NavLink>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <div>
                <Link to='/cart'>
                  <CartWidget /> 
                </Link>
            </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}

export default Header;