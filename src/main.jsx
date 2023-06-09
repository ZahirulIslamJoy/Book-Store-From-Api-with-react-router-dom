import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Books from './books/Books';
import SingleInfo from './books/SingleInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path: "/",
        element: <h1>homepage</h1>, 
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader:()=>fetch(`https://api.itbook.store/1.0/new`), 
      },
      {
        path: "/books/:bookId",
        element:<SingleInfo></SingleInfo>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
