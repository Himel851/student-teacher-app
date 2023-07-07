import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const StudentAppointment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group as={Col} controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group as={Col} controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group as={Col} controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </Form.Group>
    </Form.Row>
    <Form.Group controlId="appointmentDate">
      <Form.Label>Appointment Date</Form.Label>
      <Form.Control
        type="date"
        placeholder="Select appointment date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
    </Form.Group>
    <Button type="submit" variant="primary">
      Submit
    </Button>
  </Form>
  );
};

export default StudentAppointment;
