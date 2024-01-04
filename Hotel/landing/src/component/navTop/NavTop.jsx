import React from 'react'
import logo from "../../assets/logohotel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe, faLanguage, faUser} from '@fortawesome/free-solid-svg-icons'
import './navTop.scss'

const NavTop = () => {
  return (
    <div className='navtop'> 
      <div className="logo">
        <img src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png" alt="" />
      </div>
      <div className="items">
      <FontAwesomeIcon icon={faUser} /> <a href="">Sign In</a>
        <a href="">Join Now</a>
        <a href="">Find Reservation</a>
        <FontAwesomeIcon icon={faGlobe} />  <a href="">English</a>
      </div>
    </div>
  )
}

export default NavTop
