
import React, { useEffect, useState } from 'react';
import price from './svg/price.svg';
import supplier from './svg/courier.png';
import addImg from './svg/image.svg';
import add from './svg/add.svg';
import description from './svg/description.png';
import category from './svg/category.svg';
import vegetables from './svg/vegetables.png';
import {Helmet} from 'react-helmet-async';

import './AddItem.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const handleAddItem = async (event) => {
        event.preventDefault()
        const userId = user?.uid;
        const title = event.target.name.value;
        const category = event.target.category.value;
        const price = event.target.price.value;
        const DiscountPrice = event.target.DiscountPrice.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const imageUrl = event.target.imageUrl.value;
        const details = event.target.details.value;
        const Item = {userId, title, category, price, DiscountPrice, quantity, supplierName, imageUrl, details }
        const { data } = await axios.post('https://vast-ridge-91427.herokuapp.com/item', Item)
        toast.success('Successfully Added')



    }
    return (
        <div className='addItem'>
            <Helmet>
                <title>Add Item</title>
            </Helmet>
            <h2>Please Add Item</h2>
            <form onSubmit={handleAddItem}>
                <div>
                    <img src={vegetables} alt="" />
                    <input placeholder='Item Title' type="text" name="name" id=""  required />
                </div>
                <div>
                    <img src={category} alt="" />
                    <input placeholder='Category' type="text" name="category" id="" list="category" required />
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
                    <input placeholder='Price' type="text"  name="price" id="" required />
                </div>
                <div>
                    <img src={price} alt="" />
                    <input placeholder='Discount Price' type="text"  name="DiscountPrice" id="" required />
                </div>
                <div>
                    <img src={add} alt="" />
                    <input placeholder='Quantity' type="text" name="quantity" id="" required />

                </div>
                <div>
                    <img src={supplier} alt="" />
                    <input placeholder='Supplier Name' type="text"  name="supplierName" id="" required />
                </div>
                <div>
                    <img src={addImg} alt="" />
                    <input placeholder='Image Url' type="text"  name="imageUrl" id="" required />
                </div>
                <div>
                    <img src={description} alt="" />
                    <input placeholder='Details' type="text"  name="details" id="" required />
                </div>
                <input type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;