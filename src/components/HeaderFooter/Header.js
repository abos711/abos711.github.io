import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/"></Nav.Link>
    <Nav.Link href="#About">About</Nav.Link>
    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#Skills">Skills</Nav.Link>
    <Nav.Link href="#Resume">Resume</Nav.Link>
  </Fragment>
)

// Insert drop down icon

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">
      Alexander Bos
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
