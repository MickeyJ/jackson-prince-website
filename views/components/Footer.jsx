import React from 'react'

const Footer = (props) =>(
  <footer id="footer">
    <span>&copy; 2015</span>
    <span>{props.siteName}</span>
    <span><a id="back-to-top" >Go Up</a></span>
  </footer>
);

export default Footer;