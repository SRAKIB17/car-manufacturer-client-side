import React from 'react';
import './loading.css'

const Loading = () => {
    return (
        <div>
            <div className="main-item">
                <div className="static-background">
                    <div className="background-masker btn-divide-left"></div>
                </div>

                <div className="animated-background">
                    <div className="background-masker btn-divide-left"></div>
                </div>

                <div className="shared-dom">
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                    <div className="sub-rect pure-background"></div>
                </div>

                <div className="css-dom"></div>
            </div>
        </div>
    );
};

export default Loading;