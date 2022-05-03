import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageItemList from './ManageItemList';
import './ManageItem.css'

import { toast } from 'react-toastify';
import ConfirmDelete from './ConfirmDelete';
import { useLocation, useNavigate } from 'react-router-dom';
import Edit from './Edit';
import Loading from '../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

import { Search } from 'react-bootstrap-icons';



const ManageItem = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [edit, setEdit] = useState(false)
    const [deleteItem, setDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('')
    const [updateId, setUpdateId] = useState('')
    const [skip, setSkip] = useState(10)
    const [page, setPage] = useState(0)
    const [search, setSearch] = useState(false);
    const [searchReasult, setSearchResult] = useState([])

    //________________________________ for my item get url ________________________

    const location = useLocation().pathname.split('/')[1]

    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        // for my items
        if (location === 'my-items') {
            const getItem = async () => {
                try {
                    const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/my-items/${user?.uid}?page=1&skip=100&email=${user?.email}`, {
                        headers: { token: `secToken ${localStorage.getItem('token')}` }
                    })
                    setItems(data)
                }
                catch (err) {
                    if (err.response.status === 401 || err.response.status === 403) {
                        signOut(auth)
                    }
                }
            }
            getItem()
        }


        // for search section 
        else if (search) {
            const getItem = async () => {
                const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/item?page=0&skip=`)
                setSearchResult(data)
                console.log(searchReasult)
            }
            getItem()

        }
        // for manage items 

        else if(!search && location !== 'my-items'){
            console.log(534534534)
            const getItem = async () => {
                const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/item?page=${page}&skip=${skip}`)
                setItems(data)
            }
            getItem()
        }

    }, [user, updateId, page, skip, search])

    //_____________________________________________________________________________

    //---------------------------page number-----------------------------_-----------

    const [total, setTotal] = useState(0)
    useEffect(() => {
        axios.get('https://vast-ridge-91427.herokuapp.com/item-page')
            .then(res => {
                const count = res.data.page;
                setTotal(Math.ceil(count / skip))

            })
    }, [skip,page])

    //______________________________ for edit item ______________________________

    const handleEdit = (id) => {
        setEdit(!edit)
        setUpdateId(id)
    }

    // ___________________________for deleteConfirm +_____________________________

    const deleteHandleItem = id => {

        setDeleteId(id)
        setDelete(!deleteItem)
    }
    if (loading) {
        return <Loading />
    }

    const deleteConfirm = async () => {
        const { data } = await axios.delete('https://vast-ridge-91427.herokuapp.com/item/' + deleteId)
        toast.success('Successfuly Delete')
        if (data.deletedCount === 1) {
            setItems(items.filter(item => item._id !== deleteId))
        }
        setDelete(false)
    }

    //--------------------------------------------------------------------------

    //------------------------------------- for search -----------------------------


    const searchHandler = e => {
        const value = e.target.value
        const result = searchReasult.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()) || item.supplierName.toLowerCase().includes(value.toLowerCase()))
        setItems(result)
    }


    const handle = { handleEdit, deleteHandleItem, deleteConfirm }
    return (
        <div>
            <div>
                <h1 className='text-center' style={{ color: '#7da30a' }}>{location === 'my-items' ? 'My' : 'Manage'} Items</h1>
            </div>
            <div className='ManageItemMainTitle'>
                {/*---------------------------- for search result =-------------------------- */}
                <div className='searchBtn'>
                    {
                        search && <input type="text" onChange={searchHandler} name="" id="" />
                    }
                    <button onClick={() => setSearch(!search)}><Search /></button>
                </div>
                <button onClick={() => navigate('/add-item')} className='manageInventories'> Add New Item  </button>
            </div>
            {/* --------------------------------for edit an item ------------------------------------------------*/}
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
                {/*-------------------------------------------------------------------------------------------------------*/}
                {/*------------------------------------FOr Delete confirm ----------------------------------------------------------*/}
                {
                    deleteItem && <div className='Modal'>
                        <div className='modal-content'>
                            <ConfirmDelete handle={handle} />
                            <button onClick={() => setDelete(!deleteItem)} className='close'>X</button>
                        </div>
                    </div>
                }
                {/*-----------------------------------------------------------------------------------*/}
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
            <div className='pageNumber'>
                <div className='page'>
                    {
                        Number.isFinite(total) && (
                            [...Array(total)?.keys()].map(currentPage => <div className={page === currentPage ? 'currentPage' : ''} onClick={() => setPage(currentPage)}>{currentPage + 1}</div>)
                        )
                    }
                </div>
                <div>
                    <select onChange={(e) => setSkip(e.target.value)}>
                        <optgroup label="Per page count">
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">10</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="">All</option>
                        </optgroup>

                    </select>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;