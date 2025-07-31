import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
      >
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home" >Home <span className="visually-hidden"></span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">about</NavLink>
                </li>
                
            </ul>
           
        </div>
      </nav>
      
    </>
  )
}

export default Nav
