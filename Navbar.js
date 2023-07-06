import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Naving() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <nav className="mx-auto d-flex india">
            <Nav ><Link style={{height:"50px",lineHeight:"40px",width:"100px",textDecoration:"none",color:"white"} } to="/">Home</Link></Nav>
            {/* <Nav><Link style={{width:"100px"}} to="/cart">Features</Link></Nav> */}
            <Nav><Link style={{width:"50px",lineHeight:"40px",width:"100px",textDecoration:"none",color:"white"}} to="/Cart">Pricing</Link></Nav>
          </nav>
        </Container>
      </Navbar>
      <Outlet/>
      </>
      )
    }





