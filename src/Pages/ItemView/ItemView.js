import React from 'react';
import './ItemView.css'
import { Link, useNavigate } from 'react-router-dom';



const ItemView = ({ item: { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title, _id } }) => {
    const quantityParse = parseInt(quantity)
    const navigate = useNavigate()
    return (
        <div className='item'>
            <div className='inventorie'>
                <img src={imageUrl} alt="" />
                <h3>{title}</h3>
                <h5>Quantity:
                    <span className='new'> {Boolean(quantityParse)?quantityParse:<span style={{color:"red"}}>Stock out</span>}
                    </span>
                </h5>
                <h3 className='price'>
                    Price:
                    <del className='old'> ${price}</del>
                    <span className='new'>     ${DiscountPrice}</span>
                </h3>
                <span className='category'>
                    <Link to='/'><small>{category}</small></Link>
                    <b>||</b>
                    <Link to=''>{supplierName}</Link>
                </span>

                <p>
                    {
                        details?.substring(0, 60)
                    }...
                </p>
            </div>
            <div>
                <button onClick={() => { navigate('/inventory/' + _id) }}> Manage Item</button>

            </div>

        </div>
    );
};

export default ItemView;