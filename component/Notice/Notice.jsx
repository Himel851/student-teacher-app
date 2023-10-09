import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Notice = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [deactivateTime, setDeactivateTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4024/api/v1/notice/create', {
                title,
                details,
                deactivateTime,
            });
            if (response.status === 200) {
                toast.success('Notice created successfully!');
                setTitle('');
                setDetails('');
                setDeactivateTime('');
            } else {
                console.error('Error submitting notice.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('Notice created failed!');

        }
    };

    return (
        <div style={{ marginTop: '5rem' }}>
            <Container>
                <h1>Notice Form</h1>
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

                    <Form.Group controlId="time">
                        <Form.Label>Deactivate Time:</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={deactivateTime}
                            onChange={(e) => setDeactivateTime(e.target.value)}
                            required
                        />
                    </Form.Group>
                    

                    <Button variant="primary" type="submit" className='mt-3'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Notice