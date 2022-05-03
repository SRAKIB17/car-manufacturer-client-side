import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemView from '../ItemView/ItemView';
import headerHome from './../../images/header.png';
import './Home.css'
import { Send } from 'react-bootstrap-icons'
import join from '../../images/join.png';
import Apps from './Apps';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Home = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item?page=0&skip=6`)
            setItems(data)
        }
        getItem()
    }, [])
    if(items.length === 0){
        return <Loading/>
    }
    return (
        <div>
            <div className='homeBanner'>
                <div className='bannarTitle'>
                    <h3>Welcome To Our Shop Grocery warehouse</h3>
                    <h1>Shop Online For</h1>
                    <h1>Fresh Grocries</h1>
                    <p>
                        The center of the store is typically called the Grocery department and while it doesn't always make up the largest percentage of a store's sales, it is the largest department in the store.
                        <button> Manage More</button>

                    </p>
                </div>
                <div className='bannarImg'>
                    <img src={headerHome} alt="" />
                </div>
            </div>
            {/* for item all  */}
            <div className='inventoriesTitle'>
                <small>Most Popular</small>
                <div>
                    <div>

                    </div>
                    <h2>Trending Inventories</h2>
                    <div>

                    </div>
                </div>
            </div>
            
            <div className='ItemMain'>
                {
                    items.map(item => <ItemView id={item._id} item={item} />)
                }
            </div>
            <button onClick={()=>navigate('/manage-inventories')} className='manageInventories'> Manage Inventories </button>
            <div>
                <Apps/>
            </div>
            {/* join with our wire house  */}
            <div className='joinWithUs'>
                <div>
                    <h3>Join With Our Warehouse</h3>
                    <div>
                        <form id='joinEmail'>
                            <input type="email" name="" id="" />
                        </form>
                        <button form='joinEmail'><Send /></button>
                    </div>
                </div>
                <div>
                    <img src={join} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Home;