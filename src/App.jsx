import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react'
import BasicButtons from './components/Button'

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4">
        <h3 className="mb-4">Dashboard Overview</h3>

        <Row className="g-3">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Total Users</Card.Title>
                <Card.Text>1,234</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Total Orders</Card.Title>
                <Card.Text>567</Card.Text>
                <Button variant="secondary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Total Revenue</Card.Title>
                <Card.Text>₹45,678</Card.Text>
                <Button variant="success">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

