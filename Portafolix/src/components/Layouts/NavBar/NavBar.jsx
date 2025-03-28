import { ItemNavBar } from "../../Ui/ItemNavBar/ItemNavBar";

import React from 'react'

export const NavBar = () => {
  return (
    
    <>
  
    <nav>
        <ul className='List'>
          <ItemNavBar  contenido="Home"/>
          <ItemNavBar contenido="Education"/>
          <ItemNavBar contenido="Services"/>
          <ItemNavBar contenido="Technical skills"/>
        </ul>
      </nav>
    
    </>
  )
}