import React, { Component } from 'react';
import { Card, ListGroup, Row, Col, Button, Alert } from 'react-bootstrap';

export default class Shops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      total: 0,
      showOrderConfirmation: false,
    };

    this.products = [
      {
        id: 1,
        name: 'Maglia da mare',
        price: 29.99,
        description: 'Una comoda maglia per le tue avventure in mare.',
        imageURL: 'https://t1.gstatic.com/images?q=tbn:ANd9GcTT0qnio3caGKBImcWsmWTaLl23ybNamw3G8SgUf-b43eg50O_h',      },
      {
        id: 2,
        name: 'Cappello da capitano',
        price: 19.99,
        description: 'Un cappello elegante per sentirsi il vero capitano a bordo.',
        imageURL: 'https://m.media-amazon.com/images/I/81idKZG0tRL._AC_UY780_.jpg', 
      },
      {
        id: 3,
        name: 'Occhiali da sole nautici',
        price: 39.99 ,
        description: 'Occhiali da sole con design nautico per proteggere gli occhi sotto il sole.',
        imageURL: 'https://assets2.oakley.com/cdn-record-files-pi/40d782b2-db23-4b64-b57d-a70600594aa7/88d30f5b-8f62-46c0-afad-b0a100a4236e/0OO9363__936301__P21__shad__qt.png?impolicy=OO_ratio&width=2000',  
  
      },
      {
        id: 4,
        name: 'Borsa da spiaggia',
        price: 49.99,
        description: 'Una borsa spaziosa per portare tutto ciò che ti serve sulla spiaggia.',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgw3mlDhoXirygKexDpqlj_m7KfrnLDm6ErVchX-PKn3-u07eW_FgRndi6-icP2ETEH4&usqp=CAU', 
  
      },
      {
        id: 5,
        name: 'Set di posate',
        price: 34.99,
        description: 'Un set di posate con motivi marittimi per le tue cene a tema.',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXAXxypo_EL3_6QdU0t8oC6rnOjPrBvjwZw&usqp=CAU',
  
      },
      {
        id: 6,
        name: 'Insegna da parete ',
        price: 24.99 ,
        description: 'Una insegna decorativa per dare un tocco marittimo alle tue pareti.',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqw1JNmwxdtmiMlfrYSWEujfeugr1ZHDxb3lf9D96_TkZYmEn-hvVgnaBUV60dV-28j2E&usqp=CAU', 
  
      },
      {
        id: 7,
        name: 'Libro manuale sui nodi',
        price: 14.99 ,
        description: 'Un libro che illustra tutti i nodi esistenti',
        imageURL: 'https://libreriadelmare.it/wp-content/uploads/librodeinodihoepli-2.jpg', 
  
      },
      {
        id: 8,
        name: 'Cuscino conchiglia',
        price: 19.99 ,
        description: 'Un morbido cuscino a forma di conchiglia per un sonno rilassante.',
        imageURL: 'https://www.tinacodazzohome.com/images/articoli/max/COR-22_ROSSO_1_1.jpg', 
      },
      {
        id: 9,
        name: 'Quadro youcht',
        price: 59.99 ,
        description: 'Un quadro artistico con un veliero al tramonto per decorare la tua casa.',
        imageURL: 'https://m.media-amazon.com/images/I/61xjQb0IIGL._AC_UF1000,1000_QL80_.jpg', 
  
      },
      {
        id: 10,
        name: 'barca a Vela decorativa',
        price: 44.99 ,
        description: 'Una barca a vela decorativa per creare una atmosfera marittima nella tua casa.',
        imageURL: 'https://www.nonsolocerimonie.it/wp-content/uploads/2019/05/Barca-a-Vela-Decorativa-con-Luci-6.jpg', 
  
      },
  
  


      
    ];
  }

  addToCart(product) {
    const { cart, total } = this.state;

    // verifico se il prodotto è nel carrello
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // se c e aggiorno la quantita
      existingProduct.quantity += 1;
    } else {
      // se non è nel carrello aggiungo quantita
      product.quantity = 1;
      this.setState({
        cart: [...cart, product],
      });
    }

    // aggiorno prezzo totale
    this.setState({
      total: total + product.price,
    });
  }

  removeFromCart(product) {
    const { cart, total } = this.state;

    const updatedCart = cart.filter((item) => item.id !== product.id);
    const updatedTotal = total - product.price * product.quantity;

    this.setState({
      cart: updatedCart,
      total: updatedTotal,
    });
  }

  handleOrderConfirmation() {
    // Mostra la conferma dell'ordine
    this.setState({ showOrderConfirmation: true });

    window.scrollTo({
        top: window.scrollY + 500,
        
      });
  
    // Nascondi la conferma dell'ordine dopo 2 secondi
    setTimeout(() => {  
      this.setState({ showOrderConfirmation: false });
  
      
    }, 2000);
  }
  
  render() {
    return (
      <div>
        <Row xs={1} md={2} lg={3} xl={6} className="mt-5">
          {this.products.map((product) => (
            <Col key={product.id} className="mb-4">
              <Card style={{ width: '14rem', zIndex: 1 }}>
                <Card.Img variant="top" src={product.imageURL} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{`${product.price.toFixed(2)} $`}</ListGroup.Item>
                  <ListGroup.Item>{product.description}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button onClick={() => this.addToCart(product)}>Aggiungi al carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-4">
          <h2>Carrello</h2>
          <ul>
            {this.state.cart.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity} - {(item.price * item.quantity).toFixed(2)} $
                <Button variant="danger" size="sm" className="ml-2" onClick={() => this.removeFromCart(item)}>
                  Rimuovi dal carrello
                </Button>
              </li>
            ))}
          </ul>
          <p>Total: {this.state.total.toFixed(2)} $</p>
          <Button onClick={() => this.handleOrderConfirmation()}>Invia l'ordine</Button>
          {this.state.showOrderConfirmation && (
            <Alert variant="success" className="mt-3" >
              Ordine inviato correttamente
            </Alert>
          )}
        </div>
      </div>
    );
  }
}
