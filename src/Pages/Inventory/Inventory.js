import React from 'react';
import { useParams } from 'react-router-dom';
import ManageItem from '../ManageItem/ManageItem';
import ManageOne from './ManageOne';

const Inventory = () => {
    const {id} = useParams()
    
    return (
        <div>
            {
                id==='manage-item'?<ManageItem/>:<ManageOne id={id}/>
            }
        </div>
    );
};

export default Inventory;