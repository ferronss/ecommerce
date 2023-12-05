import React, { Component } from 'react'
import './Font.css';

export default class Aboutus extends Component {
  render() {
    return (
        <div>
        <h1>Benvenuti in NauticalDream</h1>
        <p>
          NauticalDream è la destinazione online per gli amanti del mare e della navigazione! Ci impegniamo a fornire prodotti nautici di alta qualità e un'esperienza di shopping online senza pari.
        </p>
        <div>
          <h2>Chi Siamo</h2>
          <p>
            Siamo un team appassionato di navigatori, appassionati di vela e amanti del mare. La nostra avventura è iniziata con la semplice idea di creare un luogo dove gli entusiasti del mare possano trovare tutto ciò di cui hanno bisogno, dalla navigazione ai prodotti lifestyle nautici.
          </p>
        </div>
        <div>
          <h2>La Nostra Missione</h2>
          <p>
            In un mondo sempre più frenetico, ci impegniamo a portare un po' di tranquillità e ispirazione dalla vita marina alle vostre vite quotidiane. Che siate marinai esperti o aspiranti capitani, NauticalDream è qui per essere la vostra destinazione preferita per l'abbigliamento, gli accessori e gli strumenti nautici di qualità.
          </p>
        </div>
        {/* ... altre sezioni ... */}
      </div>    
      )
  }
}
