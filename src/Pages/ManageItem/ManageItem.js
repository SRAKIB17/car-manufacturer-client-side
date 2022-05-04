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
    const [searchArray, setSearchArray] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [totalPage, setTotalPage] = useState(0)


    //________________________________ for my item get url ________________________

    const location = useLocation().pathname.split('/')[1]

    const [user, loading] = useAuthState(auth)

    // --------------------------main function handel----------------------------------

    useEffect(() => {
        // for my items
        if (location === 'my-items') {
            if (user?.email) {
                const getItem = async () => {
                    try {
                        const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/my-items/${user?.uid}?page=${page}&skip=${skip}&email=${user?.email}`, {
                            headers: { token: `secToken ${localStorage.getItem('token')}` }
                        })
                        setItems(data.data)


                        //---------------------------page number-----------------------------_-----------
                        const count = data.count;
                        setTotalPage(Math.ceil(count / skip))
                    }
                    catch (err) {
                        if (err.response.status === 401 || err.response.status === 403) {
                            signOut(auth)
                        }
                    }
                }
                getItem()
            }
        }
        //------------------search result handle -------------------
        if (search) {
            searchReasultHandle()
            if (skip) {
                setItems(searchResult.slice(skip * page, skip * (page + 1)))
            }
            else{
                setItems(searchResult)
            }
        }
        // for manage items 

        else if (location !== 'my-items') {

            const getItem = async () => {
                const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/item?page=${page}&skip=${skip}`)
                const count = data.count;

                setTotalPage(Math.ceil(count / skip))
                setItems(data.data)

            }
            getItem()

        }

    }, [user, updateId, page, skip, search])

    //// ------------for searchReasult ----------------------------
    const searchReasultHandle = async () => {
        if (location === 'my-items' && user?.email) {

            const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/my-items/${user?.uid}?page=0&skip=&email=${user?.email}`, {
                headers: { token: `secToken ${localStorage.getItem('token')}` }
            })
            setSearchArray(data.data)

        }
        else if (location !== 'my-items' && user?.email) {

            const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/item/?page=0&skip=&email=${user?.email}`)
            setSearchArray(data.data)
        }
    }


    const searchHandler = async e => {
        const value = e.target.value
        const result = searchArray.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()) || item.supplierName.toLowerCase().includes(value.toLowerCase()))
        setSearchResult(result)
        const count = result.length;
        const pageCount = Math.ceil(count / skip)
        setTotalPage(pageCount)
        setItems(result.slice(0, skip))
    }

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
    //------------------------for loading ------------------------
    if (loading) {
        return <Loading />
    }
    if (!search && location !== 'my-items' && items.length === 0) {
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
                        search && <input type="text" onChange={searchHandler} placeholder='search quarry' name="" id="" />
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
                        Number.isFinite(totalPage) && (
                            [...Array(totalPage)?.keys()].map(currentPage => <div className={page === currentPage ? 'currentPage' : ''} onClick={() => setPage(currentPage)}>{currentPage + 1}</div>)
                        )
                    }
                </div>
                <div>
                    <select onChange={(e) => setSkip(e.target.value)}>
                        <optgroup label="Per page count">
                            <option value="5">5</option>
                            <option value="10" selected='true'>10</option>
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