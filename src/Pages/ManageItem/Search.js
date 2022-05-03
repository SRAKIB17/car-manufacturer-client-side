import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Search } from 'react-bootstrap-icons'
import './Search..css'

const SearchQ = () => {
    const [search, setSearch] = useState(true)
    const [items, setItems] = useState([])
    const [searchReasult, setSearchResult] = useState([])
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item?page=0&skip=`)
            setItems(data)
        }
        getItem()
    }, [])
    const searchHandler = e => {
        const value = e.target.value
        const result = items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()))
        setSearchResult(result)
    }


    return (
        <div style={{position:'relative'}}>
            <div className='searchBtn'>
                {
                    search && <input type="text" onChange={searchHandler} name="" id="" />
                }
                <button onClick={() => setSearch(!search)}><Search /></button>
            </div>
            {
                search && <>
                    <h5 style={{textAlign:'center', position:'absolute',top:'0'}}>Search reasult</h5>
                    <div className='searchReasult'>
                        <table className='table table-hover '>
                            <tbody>

                                {
                                    searchReasult.map(item =>

                                        <tr className='itemManage'>
                                            <td>{items.indexOf(item) + 1}</td>
                                            <td><img src={item.imageUrl} alt="" className='itemImage' /></td>
                                            <td>{item.title}</td>
                                            <td title={item.category}>{item.category.substring(0, 10)}</td>
                                            <td>${item.price}</td>
                                            <td>${item.DiscountPrice}</td>
                                            <td>{item.newQuantity ? item.quantity : <span className='text-danger'>Stock Out</span>}</td>

                                            {/* <td><button onClick={() => handleEdit(_id)}><img className='deleEdit' src={edit} alt="" /></button></td>
                                        <td><button onClick={() => deleteHandleItem(_id)}><img className='deleEdit' src={deleteItem} alt="" /></button></td> */}
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </>
            }
        </div>
    );
};

export default SearchQ;