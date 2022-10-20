import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;