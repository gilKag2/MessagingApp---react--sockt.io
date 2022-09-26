import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

const Login = ({ onIdSubmit }) => {

    const idRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        onIdSubmit(idRef.current.value);
    };

    const createNewId = () => {
        const newRandomId = uuidV4();
        onIdSubmit(newRandomId);
    };

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form className='w-100' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type='submit' className='me-2'>Login</Button>
                <Button variant='secondary' onClick={createNewId}>Create New Id</Button>
            </Form>
        </Container>
    );
};

export default Login;