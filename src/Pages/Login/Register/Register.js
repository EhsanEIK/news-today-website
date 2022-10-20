import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmitRegister = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                updateProfile(name, photoURL);
                form.reset();
            })
            .catch(error => setErrorMsg(error.message));
    }

    const updateProfile = (name, photoURL) => {
        updateUserProfile(name, photoURL)
            .then(r => { })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <Form onSubmit={handleSubmitRegister}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='userName' type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="photoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter Your Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger d-block">
                {errorMsg}
            </Form.Text>
        </Form>
    );
};

export default Register;