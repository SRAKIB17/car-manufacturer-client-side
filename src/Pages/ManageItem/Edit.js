
import React, { useEffect, useState } from 'react';
import price from '../AddItems/svg/price.svg';
import supplier from '../AddItems/svg/courier.png';
import addImg from '../AddItems/svg/image.svg';
import add from '../AddItems/svg/add.svg';
import description from '../AddItems/svg/description.png';
import category from '../AddItems/svg/category.svg';
import vegetables from '../AddItems/svg/vegetables.png';

import '../AddItems/AddItem.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import useFindOneItem from '../../hooks/useFindOneItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Helmet} from 'react-helmet-async';

const AddItem = ({ updateId, handleEdit, setItems:{ setItems, items } }) => {
    const [user] = useAuthState(auth)
    const { item, setItem } = useFindOneItem(updateId)

    const onKeyUp = (event) => {
        setItem({})
    }
    
    const handleAddItem = async (event) => {
        event.preventDefault()
        const title = event.target.name.value;
        const category = event.target.category.value;
        const price = event.target.price.value;
        const DiscountPrice = event.target.DiscountPrice.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const imageUrl = event.target.imageUrl.value;
        const details = event.target.details.value;
        const userId = user?.uid;
        const Item = {userId, title, category, price, DiscountPrice, quantity, supplierName, imageUrl, details }
        if (updateId) {
            const { data } = await axios.put('https://vast-ridge-91427.herokuapp.com/item/' + updateId, Item);
            if (data.modifiedCount === 1) {
                const newItem = items.filter(item => item._id !== updateId)
                setItems([...newItem, Item])
                toast.success('successfully update item')
            }
            handleEdit('')
        }

    }
    return (
        <div className='addItem'>
            <Helmet>
                <title>Edit Item</title>
            </Helmet>
            <h2>Please Update Item</h2>
            <form onSubmit={handleAddItem} onKeyUp={onKeyUp}>
                <div>
                    <img src={vegetables} alt="" />
                    <input placeholder='Item Title' type="text" name="name" id="" value={item?.title} required />
                </div>
                <div>
                    <img src={category} alt="" />
                    <input placeholder='Category' type="text" name="category" id="" value={item?.category} list="category" required />
                    <datalist id="category">
                        <option value="Fruits" />
                        <option value="Vegetables" />
                        <option value="Canned Goods" />
                        <option value="Frozen Foods" />
                        <option value="Fish and shellfish" />
                        <option value="Condiments and Spices" />
                        <option value="Sauces and Oils " />
                        <option value="Snacks" />
                        <option value="Bread and Bakery" />
                        <option value="Beverages" />
                        <option value="Pasta/Rice" />
                        <option value="Cereal" />
                        <option value="Health Care" />
                        <option value="Personal Care" />
                        <option value="Paper and Wrap" />
                        <option value="Household Supplies" />
                        <option value="Baby Items" />
                        <option value="Other items" />
                    </datalist>
                </div>
                <div>
                    <img src={price} alt="" />
                    <input placeholder='Price' type="text" value={item?.price} name="price" id="" required />
                </div>
                <div>
                    <img src={price} alt="" />
                    <input placeholder='Discount Price' type="text" value={item?.DiscountPrice} name="DiscountPrice" id="" required />
                </div>
                <div>
                    <img src={add} alt="" />
                    <input placeholder='Quantity' type="text" value={item?.quantity} name="quantity" id="" required />

                </div>
                <div>
                    <img src={supplier} alt="" />
                    <input placeholder='Supplier Name' type="text" value={item?.supplierName} name="supplierName" id="" required />
                </div>
                <div>
                    <img src={addImg} alt="" />
                    <input placeholder='Image Url' type="text" value={item?.imageUrl} name="imageUrl" id="" required />
                </div>
                <div>
                    <img src={description} alt="" />
                    <input placeholder='Details' type="text" value={item?.details} name="details" id="" required />
                </div>
                <input type="submit" value="Update Item"/>

            </form>
        </div>
    );
};

export default AddItem;