import React from 'react';
import { useNavigate } from 'react-router-dom';
import vig from '../../images/404.png';
import egg from '../../images/egg404.jpg';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='notFound'>
            <div className='egg'>
                <img src={egg} alt="" />
            </div>
            <div className='not404'>
                <h1>404</h1>
                <h3>We Could Not FInd Page<br/> You're Looking</h3>
                <p>
                    The link you're trying to access is probably broken <br/>or the page has been removed

                </p>
                <button onClick={()=>navigate('/')}>Back to Home</button>
            </div>
            <div className='bgImage'>
                <img src={vig} alt="" />
            </div>
        </div>
    );
};

export default NotFound;