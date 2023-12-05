import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Font.css';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    review: '',
  });

  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Invia i dati del modulo al server
    fetch('http://localhost:80/submitReview.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setShowSuccessBanner(true);

        // Nascondi il banner dopo 3 secondi
        setTimeout(() => {
          setShowSuccessBanner(false);
        }, 1500);
        
      })
      .catch(error => {
        console.error('Errore:', error);
        
      });
  };

  return (
    <div>
      {showSuccessBanner && (
        <div
          style={{
            backgroundColor: '#4caf50', // Colore verde,bunner
            color: 'white',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Messaggio inviato correttamente!
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName" style={{ width: '30%' }} className="mx-auto">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName" style={{ width: '30%' }} className="mx-auto">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email"  style={{ width: '30%' }} className="mx-auto">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="review"  style={{ width: '30%' }} className="mx-auto">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia Recensione
        </Button>
      </Form>
    </div>
  );
};

export default function Contattaci() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">Contattaci</h1>
      <ReviewForm />
    </div>
  );
}
