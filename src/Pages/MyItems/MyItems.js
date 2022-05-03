
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageItemList from '../ManageItem/ManageItemList';


import { toast } from 'react-toastify';
import ConfirmDelete from '../ManageItem/ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import Edit from '../ManageItem/Edit';
import Loading from '../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyItems =  () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [edit, setEdit] = useState(false)
    const [deleteItem, setDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('')
    const [updateId, setUpdateId] = useState('')

    const [user] = useAuthState(auth)

    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/my-items/${user?.uid}?page=1&skip=100&email=${user?.email}`,{
                headers: {token: `secToken ${localStorage.getItem('token')}`}
            })
            
            setItems(data)
        }
        getItem()
    }, [user])
    // for edit item 
    const handleEdit = (id) => {
        setEdit(!edit)
        setUpdateId(id)
    }


    const deleteHandleItem = id => {
        setDeleteId(id)
        setDelete(!deleteItem)
    }
    if (items.length === 0) {
        return <div>
            <h1 className='text-denger text-center'>Not Found</h1>
            <Loading/>
        </div>
    }

    const deleteConfirm = async () => {

        const { data } = await axios.delete('https://vast-ridge-91427.herokuapp.com/item/' + deleteId)
        toast.success('Successfuly Delete')
        if (data.deletedCount === 1) {
            setItems(items.filter(item => item._id !== deleteId))
        }
        setDelete(false)
    }
    const handle = { handleEdit, deleteHandleItem, deleteConfirm }
    return (
        <div>
            <div className='ManageItemMainTitle'>
                <h1 className='text-center' style={{ color: '#7da30a' }}>My Items</h1>

                <button onClick={() => navigate('/add-item')} className='manageInventories'> Add New Item  </button>
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
            <div className='m-4 overFlow'>
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

export default MyItems;