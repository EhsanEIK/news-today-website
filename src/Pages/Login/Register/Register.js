import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const [accepted, setAccepted] = useState(false);

    useTitle('Register');

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
                handleEmailVerification();
                toast.success("Please verify your email before login.")
                form.reset();
            })
            .catch(error => setErrorMsg(error.message));
    }

    const updateProfile = (name, photoURL) => {
        updateUserProfile(name, photoURL)
            .then(r => { })
            .catch(error => setErrorMsg(error.message));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger d-block">
                {errorMsg}
            </Form.Text>
        </Form>
    );
};

export default Register;