import React from 'react'
import './style/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav>
            <div>
                <NavLink exact to='/' activateClassName='active' className='navbar-link'>Home</NavLink>
                <NavLink exact to='/about' activateClassName='about' className='navbar-link'>About</NavLink>
                <NavLink exact to='/projects' activateClassName='projects' className='navbar-link'>Projects</NavLink>
                <NavLink exact to='/contact' activateClassName='contact' className='navbar-link'>Contact Me</NavLink>
            </div>
        </nav>
    )
}

export default Navbar