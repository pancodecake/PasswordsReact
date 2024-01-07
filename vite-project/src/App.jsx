import { 
  useState,
 } from 'react'
  import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
  } from "react-router-dom";


import History from './pages/history.jsx'
import Access from './pages/access.jsx'
import {Index} from './pages/index.jsx'
import Category from './pages/category.jsx'
import Header from './containers/header/Header.jsx'
import './styles/normalize.css'
import './styles/main.scss'



const theRouter = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route index element={<Index /> } />
      <Route path="/category" element={<Category />} />
      <Route path="/access"   element={<Access  />} />
      <Route path="/history" element={<History  />} />
    </Route>
  )
)
function App() {

  
  return (
    <>
      <RouterProvider router={theRouter} />
    </>
  )
}

export default App
