import React from 'react'
import './navBottom.scss'
import { useState } from 'react'

const NavBottom = () => {
    
  return (
    <div className='navbottom'>
      <div className="items">
        <a href="">ABOUT</a>
        <a href="">ROOMS & SUITES</a>
        <a href="">EVENTS</a>
        <a href="">GALLERY</a>
        <a href="">OFFERS</a>
        <a href="">TRANSPORT RESERVATION</a>

        <button className='navbtn'>Room Book</button>
      </div>
    </div>
  )
}

export default NavBottom
