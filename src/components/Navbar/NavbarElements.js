import {Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
     background-color: #ddd;
     height: 80px;
     display: flex;

     justify-content:center;
     //este é usado para centralizar horizontalmente
     align-items:center;
     //este é usado para centralizar verticalmente
     font-size: 1rem;
     position: sticky;
     top: 0;
     z-index: 10;


     @media screen and (max-width: 960px){
          transition: 0.8s all ease;
     }
`

export const NavContainer = styled.div`
     display:flex;
     justify-content: space-between;
     height: 80px;
     z-index: 1;
     width:100%;
     padding: 0 24px;
     max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
     justify-self: flex-start;
     cursor: pointer;
     font-size:1.5rem;
     display:flex;
     align-items:center;
     margin-left:24px;
     font-weight: bold;
     text-decoration: none;
`

export const Logo = styled.img`
     width: 50px;
     height: 50px;
`

export const MobileIcon = styled.div`
     display:none;

     @media screen and (max-width: 768px){
          display:block;
          position: absolute;
          top: 0;
          right:0;
          transform: translate(-100%, 60%);
          font-size: 1.8rem;
          cursor: pointer;

     }
`

export const NavMenu = styled.ul`
     display: flex;
     align-items:center;
     list-style: none;
     text-align: center;
     margin-right: -22px;

     @media screen and (max-width: 768px){
          /* display:none; */
     }
`

export const NavItem = styled.li`
     height: 80px;
`

export const NavLinks = styled(LinkS)`
     text-decoration:none;
     color: #fff;
     display: flex;
     align-items: center;
     padding: 0 1rem;
     height: 100%;
     cursor: pointer;
`



