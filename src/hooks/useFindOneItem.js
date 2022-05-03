import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFindOneItem = (id) => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`https://vast-ridge-91427.herokuapp.com/item/${id}`)
            setItem(data)
        }
        getItem()
    }, [id])
    return {item, setItem}
};

export default useFindOneItem;