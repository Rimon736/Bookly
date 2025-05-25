import React, { Component } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from '../App';
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {
            index: true,
            path: "/Home",
            loader: ()=> fetch('booksData.json'),
            Component: Home
        },
        {
          path: "/About",
          Component:About,
        },
        {
          path:"BooksDetails/:id",
          loader: ()=> fetch('booksData.json'),
          Component: BookDetails,
        },
    ]
  },
]);
