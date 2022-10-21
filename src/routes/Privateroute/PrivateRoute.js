import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {

        return <Spinner animation="border" variant="warning" />



    }

    if (user) {

        return children;


    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;