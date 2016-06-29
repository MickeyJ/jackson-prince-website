import React from 'react'

const NavHeader = (props) =>(
  <section id="nav-header">

    <header>
      <a href="/">
        <span>{props.siteName}</span>
      </a>
    </header>

    <nav id="nav" >
      <a className="blue" href="/">Me</a>
      <span>|</span>
      <a className="blue" id="contact-link">Contact</a>
    </nav>

  </section>
);

export default NavHeader;