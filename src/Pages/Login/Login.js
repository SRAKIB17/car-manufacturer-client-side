import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './login.css'
import { Facebook, Google } from 'react-bootstrap-icons';
import email from './Svg/email-svgrepo-com.svg';
import password from './Svg/password-svgrepo-com.svg';
import userProfile from './Svg/user-svgrepo-com.svg';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify'


const Login = () => {
    const { register, handleSubmit } = useForm();

    const [registerUser, setRegisterUser] = useState(true)
    const [resetPass, setResetPass] = useState(false)

    const registerHandlar = () => {
        setResetPass(false)
        setRegisterUser(!registerUser)
    }

    // for email passeword register 
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    // for login 
    const [signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);
    
    // for google login 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // for facebook Login 
    const [signInWithFacebook, use3, loadin3, error3] = useSignInWithFacebook(auth);

    // for reset password 
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);

    const onSubmit = async data => {
            //    for signin 
            if (!resetPass && registerUser) {
                await signInWithEmailAndPassword(data.email, data.password)
                console.log(user1)

            }
            // new account 
            else if (!resetPass && !registerUser) {
                await createUserWithEmailAndPassword(data.email, data.password)
                console.log(user)
            }
            // reset pass 
            else if (resetPass) {
                await sendPasswordResetEmail(data.email)
                toast.success('send reset link on email')
            }
        }
    return (
            <div>
                <div className='loginForm'>
                    <h4>{resetPass ? 'Reset Password' : (registerUser ? 'Login' : 'New Account')}</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            resetPass || (registerUser ||
                                <div>
                                    <img src={userProfile} alt="" />
                                    <input type='text' {...register("firstName", { required: true, maxLength: 20 })} />
                                </div>)
                        }

                        <div>
                            <img src={email} alt="" />
                            <input type='email' {...register("email", { required: true })} />

                        </div>
                        {
                            resetPass ||
                            <div>
                                <img src={password} alt="" />
                                <input type="password" {...register("password", { required: true })} />
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
                                <button onClick={()=>signInWithFacebook()}><Facebook />{registerUser?'Login':'Register'} with Facebook</button>
                                <button onClick={() => signInWithGoogle()}><Google /> {registerUser?'Login':'Register'} with Google</button>
                                <button onClick={() => setResetPass(!resetPass)}>Reset Password?</button>
                            </>
                        }
                        <button onClick={registerHandlar}> {registerUser ? 'Create new Account' : 'Already have account Login'}</button>
                    </div>
                </div>

            </div>
        );
};

export default Login;

// { pattern: /^[A-Za-z]+$/i })}