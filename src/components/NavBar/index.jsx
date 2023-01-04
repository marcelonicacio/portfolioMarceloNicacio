import { useState } from 'react'
import { NavBarContainer } from './style'

export const NavBar = () => {


  return (

    <NavBarContainer> 

      <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects </a></li>
          <li><a href="#Contact">Contact </a></li>
        </ul>
       

    </NavBarContainer>
    
  )
}