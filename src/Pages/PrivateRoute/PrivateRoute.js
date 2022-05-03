import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import VerifyEmail from './VerifyEmail';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    if (loading) {
        return <Loading />
    }
    if (!user.emailVerified && user.providerData[0].providerId === 'password') {
   
        console.log(user)
        // return children
        return <VerifyEmail/>
    }
    console.log(user)
    return children
};

export default PrivateRoute;
