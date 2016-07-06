import React from 'react'

import NavLink from './../components/NavLink'

const Navbar = (props) => {
  if(!props.token){
    return(
      <nav id='app-nav'>
        <h3>Login</h3>
      </nav>
    )
  } else {
    if(props.status === 'ADMIN'){
      return (
        <ul id='app-nav' className="nav nav-pills">
          <li>
            <NavLink to="/admin/clients">Clients</NavLink>
          </li>
          <li>
            <NavLink to="/new_client">New Client</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={props.handleLogout.bind(this)}>Logout</NavLink>
          </li>
        </ul>
      )
    } else {
      return (
        <ul id='app-nav' className="nav nav-pills">
          <li>
            <NavLink to="/login" onClick={props.handleLogout.bind(this)}>Logout</NavLink>
          </li>
        </ul>
      )
    }

  }
};

export default Navbar