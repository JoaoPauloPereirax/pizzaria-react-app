import React from 'react'
import {Nav,NavContainer,NavLogo} from './NavbarElements'

export default function Navbar (){
     return(
          <Nav>
               <NavContainer>
                    <NavLogo to='/' >Pizza</NavLogo>
               </NavContainer>
          </Nav>
     )
}