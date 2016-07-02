import React from 'react'
import { Link } from 'react-router'

import NavLink from './../components/NavLink'

const Navbar = (props) => {
  if(!props.token){
    return(
      <nav id="nav">
        <span>login</span>
      </nav>
    )
  } else {
    return (
      <nav id="nav">
        <NavLink to="/clients">Clients</NavLink>
        <span> | </span>
        <NavLink to="/new_client">New Client</NavLink>
        <span> | </span>
        <Link to="/login" onClick={props.handleLogout.bind(this)}>Logout</Link>
      </nav>
    )
  }
};

export default Navbar