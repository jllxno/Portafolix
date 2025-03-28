import { ItemNavBar } from "../../Ui/ItemNavBar/ItemNavBar";

import React from 'react'

export const NavBar = () => {
  return (
    
    <>
  
    <nav>
        <ul className='List'>
          <ItemNavBar  contenido="Home" to="/"/>
          <ItemNavBar contenido="Education" to="/Education"/>
          <ItemNavBar contenido="Services" to="/Services"/>
          <ItemNavBar contenido="Skills" to="/Skills"/>
        </ul>
      </nav>
    
    </>
  )
}