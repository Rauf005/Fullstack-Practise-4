import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import './App.css'

function App() {
const routes = createBrowserRouter(Routes)
  

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
