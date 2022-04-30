import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemView from '../ItemView/ItemView';

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