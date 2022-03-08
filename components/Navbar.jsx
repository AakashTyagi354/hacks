import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Navlogoone
} from './NavbarElements';
function Navbar() {
  return (
    <div>
      <Nav>

     <Navlogoone>
       <h1>TRADING
       ECONOMICS
         </h1> 
   
    
     </Navlogoone>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Market
          </NavLink>
          <NavLink to='/about' activeStyle>
            Drop Here 
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>Sign In</NavBtnLink>
          <NavBtnLink to='/signup'>Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  )
}

export default Navbar