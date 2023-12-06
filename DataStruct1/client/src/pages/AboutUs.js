import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container style={{ paddingTop: '20px' }}>
      <Row>
        <Col lg={6} md={12}>
          <Image
            src="https://source.unsplash.com/800x600/?event" // Example Unsplash image link
            alt="About Us Image"
            fluid
          />
        </Col>
        <Col lg={6} md={12}>
          <div className="aboutus-content">
            <h2>About Us</h2>
            <p>
              We are a team of 3
            </p>
            <p>
              DataStruct is trying to provide a better learning 
              experience and getting students and fellow peers to access all DSA topics and 
              get addicted to learning!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
