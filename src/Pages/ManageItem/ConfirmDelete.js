import React from 'react';

const ConfirmDelete = ({handle:{deleteConfirm, deleteHandleItem}}) => {
    return (
        <div className='delete'>
            <h1>Are You Sure ? Delete This Item</h1>
            <button onClick={deleteHandleItem}>No</button>
            <button onClick={deleteConfirm}>Confirm</button>
        </div>
    );
};

export default ConfirmDelete;