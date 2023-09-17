import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const Notice = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4024/api/v1/notice/create', {
                title,
                details,
            });

            if (response.status === 200) {
                setSubmitted(true);
                setTitle('');
                setDetails('');
            } else {
                console.error('Error submitting notice.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='globalTop'>
            <Container>
                <h1>Awesome Notice Form</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="details">
                        <Form.Label>Details:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                {submitted && <p>Notice submitted successfully!</p>}
            </Container>
        </div>
    )
}

export default Notice