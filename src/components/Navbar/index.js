import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavContainer,NavLogo,MobileIcon,NavItem,Logo,NavLinks,NavMenu} from './NavbarElements'
import logo from '../../assets/images/logo.png'

export default function Navbar (){
     return(
          <Nav>
               <NavContainer>
                    <NavLogo to='/' ><Logo src={logo} /></NavLogo>
                    <MobileIcon>
                         <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                         <NavItem>
                              <NavLinks to="about">About</NavLinks>
                              <NavLinks to="about">About 2</NavLinks>
                         </NavItem>
                    </NavMenu>
               </NavContainer>
          </Nav>
     )
}