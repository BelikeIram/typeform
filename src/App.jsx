import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootAuth from './Pages/Auth';
import Rootwrapper from './Pages/Rootwrapper';

 const App = () => {

  const router = createBrowserRouter([
      {
        path : '/',
        element : <Rootwrapper/>,
        children : [
          {
            index : true,
            element : <RootAuth/>
          },
        ]
      }
  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App

