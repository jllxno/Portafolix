import React from 'react'
import {NavLink } from "react-router-dom";
export const ItemNavBar = ({contenido, to}) => {
  return (
   
<li ><NavLink to={to}>{contenido}</NavLink></li>

  )
}
