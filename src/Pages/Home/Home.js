import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemView from '../ItemView/ItemView';
import headerHome from './../../images/header.png';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item?page=1&skip=6`)
            setItems(data)
        }
        getItem()
    }, [])
    return (
        <div>
            <div className='homeHeader'>
                <div>
                    <h3>Welcome To Our Shop Grocery warehouse</h3>
                    <h1>Shop Online For</h1>
                    <h1>Fresh Grocries</h1>
                    <p>A typical grocery Online w sells fresh produce, meats, dairy products and, often, bakery goods alongside canned, frozen and prepared foods. In addition, a grocery store will also sell a full range of household, healthcare and personal care items.</p>
                </div>
                <div>
                    <img src={headerHome} alt="" />
                </div>
            </div>
            {/* for item all  */}
            <div className='ItemMain'>
                {
                    items.map(item=><ItemView id={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Home;