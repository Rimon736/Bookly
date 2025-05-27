import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredBook } from '../../Utilities/addToDB';

const BookDetails = () => {
    const {id}= useParams();
    const bookID= parseInt(id);

    const singlebook =useLoaderData();
    const book = singlebook.find(book => book.bookId === bookID);

    const {bookId, bookName,author,image,review,totalPages,rating,category,tags,publisher,
    yearOfPublishing} = book;

    const handleMarkAsRead = id => {
        addToStoredBook(id);
    }

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <figure className='bg-gray-100 p-2 w-[1/2]'>
                        <img className='h-[600px] w-11/12' src={image} alt="Album" />
                    </figure>
                    <a onClick={() => handleMarkAsRead(id)} className="btn">Mark as Read</a>
                    <a className="btn">Add to wishlist</a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p><span  className='font-bold'>Author:</span> {author}</p>
                        <p><span  className='font-bold'>Publisher:</span> {publisher}</p>
                        <p><span  className='font-bold'>Year of Publication:</span> {yearOfPublishing}</p>
                        <p><span  className='font-bold'>Total Pages:</span> {totalPages}</p>
                        <p><span  className='font-bold'>Rating:</span> {rating}</p>
                        <p><span  className='font-bold'>Category:</span> {category}</p>
                        <p><span  className='font-bold'>Tags:</span> {tags.join(', ')}</p>
                        <p><span  className='font-bold'>Review:</span> {review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;