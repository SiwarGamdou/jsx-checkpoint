// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Change this to your name or leave it empty
const firstName = "Siwar"; 

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {firstName ? <h3>Hello, {firstName}!</h3> : <h3>Hello, there!</h3>}
        <h1>Product Details</h1>
        <p>Check out the details of this amazing product below.</p>
      </div>
      <Card style={{ width: '18rem', margin: 'auto', boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default App;
