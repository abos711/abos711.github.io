import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Footer (props) {
  return (
    <Navbar id="footer" className="navbar-fixed-bottom w-auto" bg="dark" variant="dark" expand="lg">
      <ul className="navbar-text list-unstyled">
        <h4><b>Contact Information</b></h4>
        <li>abos@revridge.com</li>
        <li>(720) 646-1649</li>
        <li><a href="https://github.com/abos711">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/alexander-bos/">Linkedin</a></li>
        <li>New York City Metro</li>
      </ul>
    </Navbar>
  )
}

export default Footer
