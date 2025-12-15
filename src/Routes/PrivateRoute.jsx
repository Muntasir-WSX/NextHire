import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);

    if (!user)
        <Navigate to="/signin"></Navigate>
    return children;

}

export default PrivateRoute;