import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Font.css';
import backgroundVideo from './background.mp4';
import logo from './logo.png';


export default class Contattaci extends Component {
  render() {
    return (

       


        <div style={{ position: 'relative' }}>


   {/* Logo */}
   <div style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10 }}>
        <img src={logo} alt="Logo" style={{ width: '600px', height: 'auto' }} />
      </div>


        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '900px',  // Imposta un valore fisso per l'altezza
            objectFit: 'cover',
            objectPosition: '50% 50%',
            zIndex: -70,
            opacity: 0.6,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      
        {/* Pulsante al centro del video */}
        <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-35%, -50%)', width: '40%', textAlign: 'center' }}>
  <Button as={Link} to="/shop" variant="primary" textAlign='center' className="d-flex align-items-center justify-content-center" style={{ width: '70%', height: '150%', fontSize: '200%' }}>
    Accedi al catalogo
  </Button>
</div>

      </div>
      
    );
  }
}
