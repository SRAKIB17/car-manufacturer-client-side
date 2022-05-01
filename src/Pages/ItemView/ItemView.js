import React from 'react';
import './ItemView.css'
import { Link, useNavigate } from 'react-router-dom';
import add from './svg/add-cart-.svg';
import manage from './svg/manage.png';

const ItemView = ({ item: { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title, _id } }) => {
    const navigate = useNavigate()
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
                            details.substring(0, 60)
                        }...
                    </p>
                    <div className='manage'>
                        <div>
                            <button><img src={add} alt="" className='manage' />Add Cart</button>
                        </div>
                        <div>
                            <button onClick={() => { navigate(_id) }}> <img src={manage} alt="" className='manage' /> Manage Item</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemView;