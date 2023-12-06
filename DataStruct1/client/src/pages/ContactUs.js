import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const contactFormStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const contactInfoStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Container style={{ paddingTop: '30px' }}>
      <Row>
        <Col md={6}>
          <div style={contactFormStyle}>
            <h2 style={{ marginBottom: '20px', color: '#007BFF' }}>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="primary" type="submit" style={{ width: '20%', marginTop: '10px' }}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div style={contactInfoStyle}>
            <h3 style={{ marginBottom: '20px', color: '#007BFF' }}>Contact Information</h3>
            <p>
              <strong>Email:</strong> datastruct.edu@cbit.org.in
            </p>
            <p>
              <strong>Phone:</strong> +91 9674000111
            </p>
            <p>
              <strong>Address:</strong> Chaintanya Bharathi Institute of Technology,
                    Gandipet
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
