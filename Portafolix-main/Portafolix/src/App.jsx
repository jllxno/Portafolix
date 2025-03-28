import { Home } from '../src/components/Pages/Home/Home'
import React from 'react'
import { Body } from './components/Layouts/Body/Body'
import { Skills } from './components/Pages/Skills/Skills'
import { Services } from './components/Pages/Services/Services'
import { Education } from './components/Pages/Education/Education'
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/Education" element={<Education/>}/>
      <Route exact path="/Services" element={<Services/>}/>
      <Route exact path="/Skills" element={<Skills/>}/>

    </Routes>
   
    
      </>
  )
}




