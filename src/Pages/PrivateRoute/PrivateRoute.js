import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    console.log(children)

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }

};

export default PrivateRoute;