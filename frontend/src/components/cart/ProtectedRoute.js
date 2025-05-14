import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Adjust the import based on your auth context location

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth(); // Assuming your auth context provides this

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" /> // Redirect to login if not authenticated
                )
            }
        />
    );
};

export default ProtectedRoute;
