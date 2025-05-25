import React from 'react';
import { useEffect, useState, Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({loadData}) => {

    // const [booklist, setbooklist]= useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then (res => res.json())
    //         .then (data => {
    //         setbooklist(data)})
    // }, []);

    // const bookPromise= fetch('booksData.json'). then(res => res.json());

    return (
        <div>
            <Suspense fallback={<span>Loading ... </span>}>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
                 {
                    loadData.map((singlebook) => <Book key={singlebook.bookId} singlebook={singlebook}></Book>)
                }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;