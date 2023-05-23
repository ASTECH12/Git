import React from 'react'
import {Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <Link to='/' >Home</Link>
            </ul>
            <ul>
                <Link to='/contact' >Contact</Link>
            </ul>
            <ul>
                <Link to='/about' >About</Link>
            </ul>
            <ul>
                <Link to='/profile' >Profile</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar