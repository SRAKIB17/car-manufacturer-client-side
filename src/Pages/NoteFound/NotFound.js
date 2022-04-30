import React from 'react';
import vig from '../../images/404.png';
import egg from '../../images/egg404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <div>
                <img src={egg} alt="" />
            </div>
            <div>
                <h1>404</h1>
                <h3>We Could Not FInd Page You're Looking</h3>
                <p>
                    The link you're trying to access is probably broken , or the page has been removed

                </p>
                <button>Back to Home</button>
            </div>
            <div className='bgImage'>
                <img src={vig} alt="" />
            </div>
        </div>
    );
};

export default NotFound;