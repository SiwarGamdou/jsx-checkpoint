// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';  // You missed Container, Row, Col imports
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// You need to import or define `product` here:
import product from './product';  // Assuming your product data is exported from './product.js'

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#e7bfbfff" }}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Product Details</h1>
        <p>Check out the details of this amazing product below.</p>
      </div>
      <Container className="mt-4">
        <Row className="g-4">
          {product.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-70"  >
                 <Image image={product.image} name={product.name} />
                <Card.Body>
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                  <Button
                  variant="outline-success"
                  className="d-block mx-auto mt-1 mb-3"
                  onClick={() => alert("Thanks for buying!")}
                >
                  Buy Now
                </Button>
                </Card.Body>
                
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
