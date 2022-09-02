import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from '../component/Add/Add'
import Body from '../component/Body/Body'
import Navbar from '../component/Navbar/Navbar'
import OneCard from '../component/OneCard/OneCard'
import Edit from '../component/Edit/Edit'
import { Api } from '../component/Api/Api'

export const Root = () => {
  return (
    <Routes>

     <Route element={<Navbar/>}>
       <Route path='/' element={<Body/>} />
       <Route path='/add' element={<Add/>} />
       <Route path='/api' element={<Api/>} />
       <Route path='/view/:id' element={<OneCard/>} />
       <Route path='/edit/:fozil' element={<Edit/>} />
     </Route>

    <Route path='*' element={<h1>Not Found 404</h1>} />
    </Routes>
  )
}

export default Root