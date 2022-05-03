import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const VerifyEmail = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const sendEmail = async ()=>{
        await sendEmailVerification()
        toast.success('Send verify link on your email')
    }
    return (
        <div className='text-center m-4' style={{height:'50vh'}}>
            <h2 className='text-center' style={{color:'#8DC32F'}}>Please your email verify</h2>
            <button className='btn btn-info text-light h4' onClick={sendEmail}>Verify Email</button>
        </div>
    );
};

export default VerifyEmail;