import React from 'react';
import {Helmet} from 'react-helmet-async';

const ConfirmDelete = ({handle:{deleteConfirm, deleteHandleItem}}) => {

    return (
        <div className='delete'>
            <Helmet>
                <title>Confirm delete</title>
            </Helmet>
            <h1>Are You Sure ? Delete This Item</h1>
            <button onClick={deleteHandleItem}>No</button>
            <button onClick={deleteConfirm}>Confirm</button>
        </div>
    );
};

export default ConfirmDelete;