import React from 'react'

const NavHeader = (props) =>(
  <section id="nav-header">

    <header>
      <a href="/">
        <span>{props.siteName}</span>
      </a>
    </header>

    <nav id="nav" >
      <a className="black" href="/">Me</a>
      <span> | </span>
      <a className="black" id="contact-link">Contact</a>
      <span> | </span>
      <a className="black" href="/admin">Admin</a>
    </nav>

  </section>
);

export default NavHeader;