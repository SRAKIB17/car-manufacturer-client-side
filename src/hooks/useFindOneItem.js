import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFindOneItem = (id) => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item/${id}`)
            setItem(data)
        }
        getItem()
    }, [id])
    return {item, setItem}
};

export default useFindOneItem;