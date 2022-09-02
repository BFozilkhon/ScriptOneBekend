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



// Team: 
// 1.git clone proyektLinki
// 2.npm i
// 3.branch ochish: git branch v/service/1
// 4.branchga otib olish: git checkout v/service/1
// Task tugagandan keyin
// 5.git add .
// 6.git commit -m 'service done'
// 7.git push origin v/service/1
// 8.Github saytga otib pull