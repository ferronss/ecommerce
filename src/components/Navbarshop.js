import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Button, Container, Form, Nav } from 'react-bootstrap';

import Aboutus from './Aboutus';
import Contattaci from './Contattaci';
import Shop from './Shops';
import Home from './Home';
import Wheather from './wheather';


import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class Navbarshop extends Component {
  render() {


    
    return (
      <Router>

        <div style={{ position: 'relative' }}>

          
          {/* Navbar */}
          <Navbar expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
              <Navbar.Brand href="#">NauticalDream</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/home"} className="me-4">Home</Nav.Link>
                  <Nav.Link as={Link} to={"/shop"} className="me-4">Shop</Nav.Link>
                  <Nav.Link as={Link} to={"/contattaci"} className="me-4">Contattaci</Nav.Link>
                  <Nav.Link as={Link} to={"/aboutus"} className="me-4">About us</Nav.Link>
                  <Nav.Link as={Link} to={"/wheather"} className="me-4">METEO ORA</Nav.Link>
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>



 


          {/* Pulsante al centro del video */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
            <Button variant="primary" size="lg">
              Accedi al Catalogo
            </Button>
          </div>
        </div>

        <div>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contattaci" element={<Contattaci />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/wheather" element={<Wheather />} />

          </Routes>
        </div>
      </Router>
    );
  }







}
