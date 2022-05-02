import React from 'react';
import { Link } from 'react-router-dom';
import appsBg from '../../images/appsBest.png';
import play from '../../images/play.png';
import appsStore from '../../images/store.png';
import './Apps.css'

const Apps = () => {
    return (
        <div>
            <div className='inventoriesTitle'>
                <small></small>
                <div>
                    <div>

                    </div>
                    <h5 style={{margin:'10px'}}>Best Store Management Software Available</h5>
                    <div>

                    </div>
                </div>
            </div>
            <div className='bestApps'>
                <img className='appsBg' src={appsBg} alt="" />
                <div className='appsLink'>
                    <h6>Get the App</h6>
                    <div>
                        <Link to='/'><img src={play} alt="" /></Link>
                        <Link to='/'><img src={appsStore} alt="" /></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Apps;