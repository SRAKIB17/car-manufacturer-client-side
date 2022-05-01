import React from 'react';
import deleteItem from './Svg/delete.svg';
import edit from './Svg/edit.svg';


const ManageItemList = ({ item: { DiscountPrice, category, details, imageUrl, price, quantity, supplierName, title, _id }, sl,handle:{handleEdit,deleteHandleItem}}) => {
    return (
        <tr className='itemManage'>
            <td>{sl + 1}</td>
            <td><img src={imageUrl} alt="" className='itemImage' /></td>
            <td>{title}</td>
            <td title={category}>{category.substring(0, 10)}</td>
            <td>${price}</td>
            <td>${DiscountPrice}</td>
            <td>{quantity}</td>
            <td title={supplierName}>{supplierName.substring(0,10)}..</td>
            {/* <td>{details.substring(0, 20)}....</td> */}
            <td><button onClick={()=>handleEdit(_id)}><img className='deleEdit' src={edit} alt="" /></button></td>
            <td><button onClick={()=>deleteHandleItem(_id)}><img className='deleEdit' src={deleteItem} alt="" /></button></td>
        </tr>
    );
};

export default ManageItemList;