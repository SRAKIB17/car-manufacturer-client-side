import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageItemList from './ManageItemList';
import './ManageItem.css'
import AddItem from '../AddItems/AddItem';
import ConfirmDelete from './ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';
const ManageItem = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [edit, setEdit] = useState(false)
    const [deleteItem, setDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('')
    const [updateId, setUpdateId] = useState('')


    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item?page=1&skip=100`)
            setItems(data)
        }
        getItem()
    }, [updateId])
    // for edit item 
    const handleEdit = (id) => {
        setEdit(!edit)
        setUpdateId(id)
    }


    const deleteHandleItem = id => {
        setDeleteId(id)
        setDelete(!deleteItem)
    }


    const deleteConfirm = async () => {

        const { data } = await axios.delete('http://localhost:5000/item/' + deleteId)
        console.log(data)
        if (data.deletedCount === 1) {
            setItems(items.filter(item => item._id !== deleteId))
        }
        setDelete(false)
    }
    const handle = { handleEdit, deleteHandleItem, deleteConfirm }
    return (
        <div>
            <div className='ManageItemMainTitle'>
                <h1 className='text-center' style={{ color: '#7da30a' }}>Manage Items</h1>

                <button onClick={() => navigate('/add-item')} className='manageInventories'> Add Item  </button>
            </div>
            <div>
                {
                    edit &&
                    <div className='Modal'>
                        <div className='modal-content'>
                            <Edit setItems={{ setItems, items }} updateId={updateId} handleEdit={handleEdit} />
                            <button onClick={() => handleEdit(!edit)} className='close'>X</button>
                        </div>
                    </div>
                }
                {
                    deleteItem && <div className='Modal'>
                        <div className='modal-content'>
                            <ConfirmDelete handle={handle} />
                            <button onClick={() => setDelete(!deleteItem)} className='close'>X</button>
                        </div>
                    </div>
                }
            </div>
            {/* manage item  */}
            <div className='m-4'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th></th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discount Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <ManageItemList item={item} sl={items.indexOf(item)} handle={handle} key={item._id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;