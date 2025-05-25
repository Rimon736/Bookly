import React, { use , useParams, useLoaderData} from 'react';

const BookDetails = () => {
    const {id}=useParams();
    const bookID= parseInt(id);

    const singlebook = useLoaderData();
    const book = singlebook.find(book => book.id === bookID);

    const {bookId, bookName,author,image,review,totalPages,rating,category,tags,publisher,
    yearOfPublishing} = book;

    return (
        <div>
            <h2>BookDetails</h2>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className='h-[400px]' src={image} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p>Author: {author}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Total Pages: {totalPages}</p>
                        <p>Rating: {rating}</p>
                        <p>Category: {category}</p>
                        <p>Tags: {tags.join(', ')}</p>
                        <p>Review: {review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;