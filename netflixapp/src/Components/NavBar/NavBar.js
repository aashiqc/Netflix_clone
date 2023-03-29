import React from 'react'
import './Navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <a className='login-button' >login</a>
      <select  name="language" id="lang">
        <option value="en-IN">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </div>

  )
}

export default NavBar
