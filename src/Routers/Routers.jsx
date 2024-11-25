import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Press from '../Pages/Press/Press'
const Routers = () => {
  return (
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/contactus' element={<Contact />}/>
   <Route path='/press' element={<Press />}/>
   </Routes>
  )
}

export default Routers