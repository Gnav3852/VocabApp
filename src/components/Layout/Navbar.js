import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Navbar, Nav,Row,Col } from "react-bootstrap"

//if logged in with token diff nav bat
//recognized by is auth
// /* <Navbar bg="light" expand="lg">
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>

//       </Nav>

//     </Navbar.Collapse>
//   </Navbar> */

const Navbar2 = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/vocab'>Vocab</Nav.Link>
        </Nav>
        <Nav.Link href='/idk'>Link</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar2
