import React, { Component } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from '../App';
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/errorpage';
import Home from '../Pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {
            index: true,
        path: "/",
        Component: Home,
    }
    ]
  },
]);
