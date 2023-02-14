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

function Header(){
    return (
        <>
          {['xl'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3 header">
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
                        <NavLink to='/' className='menuEnlace'> INICIO </NavLink>
                        <NavLink to='/rem-ind' className='menuEnlace'> REMEDIO INDIVIDUAL </NavLink>
                        <NavLink to='/got-per' className='menuEnlace'> CONJUNTO DE REMEDIOS </NavLink>
                        <NavLink to='/caj-bac' className='menuEnlace'> CAJAS DE REMEDIOS </NavLink>
                        <NavLink to='/contacto' className='menuEnlace'> CONTACTO </NavLink>
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
                <Link to='/cart'> <CartWidget /> </Link>
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