import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Google } from 'react-bootstrap-icons';
import email from './Svg/email-svgrepo-com.svg';
import password from './Svg/password-svgrepo-com.svg';
import userProfile from './Svg/user-svgrepo-com.svg';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading';


const Login = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [registerUser, setRegisterUser] = useState(true)
    const [resetPass, setResetPass] = useState(false)

    const registerHandlar = () => {
        setResetPass(false)
        setRegisterUser(!registerUser)
    }

    // for email passeword register 
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error6] = useUpdateProfile(auth);
    // for login 
    const [signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);

    // for google login 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // for facebook Login 
    const [signInWithFacebook, use3, loading3, error3] = useSignInWithFacebook(auth);

    // for reset password 
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);

    // for error handle 
    let errMsg
    const [user5, loading5, error5] = useAuthState(auth);
    if(loading5){
        return <Loading/>
    }
    if (error || error1 || error2 || error3 || error4||error5||error6) {
        const err = error?.message || error1?.message || error2?.message || error3?.message || error4?.message || error5?.message || error6?.message
        errMsg = err.split('/')[1].slice(0, err.split('/')[1].length - 2).split('-').join(' ').toUpperCase()

    }
    if (user5) {
        navigate(from)
    }
    const onSubmit = async data => {
        //    for signin 
        if (!resetPass && registerUser) {
            await signInWithEmailAndPassword(data.email, data.password)
        }
        // new account 
        else if (!resetPass && !registerUser) {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName:data.name })
            console.log(user)
        }
        // reset pass 
        else if (resetPass) {
            await sendPasswordResetEmail(data.email)
            toast.success('send reset link on email')
        }

        const getToken = await axios.post('http://localhost:5000/login', data);
        localStorage.setItem('token', getToken.data)
    }
    return (
        <div>
            <div className='loginForm'>
                <h4>{resetPass ? 'Reset Password' : (registerUser ? 'Login' : 'New Account')}</h4>
                <small style={{ color: 'red' }}>{errMsg}</small>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        resetPass || (registerUser ||
                            <div>
                                <img src={userProfile} alt="" />
                                <input placeholder='name' type='text' {...register("name", { required: true, maxLength: 20 })} />
                            </div>)
                    }

                    <div>
                        <img src={email} alt="" />
                        <input placeholder='email' type='email' {...register("email", { required: true })} />

                    </div>
                    {
                        resetPass ||
                        <div>
                            <img src={password} alt="" />
                            <input placeholder='password' type="password" {...register("password", { required: true })} />
                        </div>
                    }
                    <input type="submit" value={resetPass ? 'Reset Password' : (registerUser ? 'Login' : 'Register')} />
                </form>
                <div className='or'>
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                <div className='socialLogin'>
                    {
                        resetPass || <>
                            <button className='facebook' onClick={() => signInWithFacebook()}><Facebook />{registerUser ? 'Login' : 'Register'} with Facebook</button>
                            <button className='google' onClick={() => signInWithGoogle()}><Google /> {registerUser ? 'Login' : 'Register'} with Google</button>
                            <button className='resetPass' onClick={() => setResetPass(!resetPass)}>Reset Password?</button>
                        </>
                    }
                    <button className='already' onClick={registerHandlar}> {registerUser ? 'Create new Account' : 'Already have account Login'}</button>
                </div>
            </div>

        </div>
    );
};

export default Login;

// { pattern: /^[A-Za-z]+$/i })}