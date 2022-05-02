import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFindOneItem from '../../hooks/useFindOneItem';
import './Inventory.css'

const ManageOne = ({ id }) => {
    const { item, setItem } = useFindOneItem(id)
    // console.log(item.price)
    const { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title, _id } = item
    const [newQunatity, setQuantity] = useState(0)
    const [QuValue, setQuValue] = useState('')
    useEffect(()=>{
        setQuantity(quantity)
        if(QuValue) {
            console.log(QuValue)
        }
    },[quantity])
    const updateQuantity = async () => {
        if (quantity > 0) {
            setQuValue(true)

        }
        // const { data } = axios.put('http://localhost:5000/item/' + , Item)
    }


    return (
        <div className='manageItemMain'>
            <div className='manageItem'>
                <img src={imageUrl} alt="" />
                <div>
                    <h3>{title}</h3>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h5 className='new'>Quantity:{newQunatity}</h5>
                            <h3 className='price'><del className='old'>${price}</del><span className='new'>     ${DiscountPrice}</span></h3>
                        </div>
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


                        <button onClick={updateQuantity}>Delivered</button>


                        {/* <button onClick={() => { navigate('/inventory/' + _id) }}> <img src={manage} alt="" className='manage' /> Manage Item</button> */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOne;