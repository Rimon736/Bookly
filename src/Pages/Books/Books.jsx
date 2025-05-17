import React from 'react';
import { useEffect, useState } from 'react';

const Books = () => {

    const [booklist, setbooklist]= useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then (res => res.json())
            .then (data => {
            setbooklist(data)})
    }, []);

    return (
        <div>
            Booklist
        </div>
    );
};

export default Books;