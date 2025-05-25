import React from 'react';
import {use} from 'react';
import { TiStar } from 'react-icons/ti';
import { Link } from 'react-router';


const Book = ({singlebook}) => {

    // const data = use({bookPromise})

    // console.log(data);

    // console.log(singlebook);

    const {bookId, bookName, author, image, rating, category, yearOfPublishing }= singlebook;

    return (
      <Link to={`BookDetails/${bookId}`}>
      <div className="card border p-3 ">
  <figure className='bg-gray-100 p-2'>
    <img
      className='h-[166px]'
      src={image}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{rating}<TiStar /></div>
      
    </h2>
    <p>{author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{yearOfPublishing}</div>
    </div>
  </div>
</div>
      </Link>
    );
};

export default Book;