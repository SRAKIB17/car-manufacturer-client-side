import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFindOneItem from '../../hooks/useFindOneItem';
import './Inventory.css'

const ManageOne = ({ id }) => {

    const { item: { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title, _id }, setItem } = useFindOneItem(id)

    return (
        <div className='manageItemMain'>
            <div className='manageItem'>
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
                                details?.substring(0, 60)
                            }...
                        </p>
                        <div className='manage'>
                            <div>
                                <button><img src={add} alt="" className='manage' />Add Cart</button>
                            </div>
                            {/* <div> */}
                                {/* <button onClick={() => { navigate('/inventory/' + _id) }}> <img src={manage} alt="" className='manage' /> Manage Item</button> */}

                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOne;