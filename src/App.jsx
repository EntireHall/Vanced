import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import Layout from "./components/Layout/Layout"
import Feature from "./components/Feature/Feature"

export default function App() {
  
  return(
 <div>

<Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/Feature' element={<Feature/>}/>
      

      </Route>



</Routes>



      </div>
      
)}
