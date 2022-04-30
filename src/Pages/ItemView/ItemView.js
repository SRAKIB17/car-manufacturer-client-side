import React from 'react';
import './ItemView.css'
import { Link } from 'react-router-dom';

const ItemView = ({ item: { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title } }) => {

    return (
        <div className='item'>
            <img src={imageUrl} alt="" />
            <div>
                <h3>{title}</h3>
                <div>
                    <h3 className='price'><del className='old'>${price}</del><span className='new'>     ${DiscountPrice}</span></h3>
                    <span className='category'>
                        <Link to='/'><small>{category}</small></Link>
                        <b>||</b>
                        <Link to=''>{supplierName}</Link>
                    </span>

                    <p>
                        {
                            details.substring(0,60)
                        }...
                    </p>
                    <button>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default ItemView;