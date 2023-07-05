import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <Container>
        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link> 
          
            <h1>
            <div className="waviy">
          <span style={{ "--i":1 }}>f</span>
          <span style={{"--i": 2}}>i</span>
          <span style={{"--i": 3}}>t</span>
          <span style={{"--i": 4}}>n</span>
          <span style={{"--i": 5}}>e</span>
          <span style={{"--i": 6}}>e</span>
          <span style={{"--i": 7}}>s</span>
          <span style={{"--i": 8}}>-</span>
          <span style={{"--i": 9}}>c</span>
          <span style={{"--i": 10}}>l</span>
          <span style={{"--i": 11}}>u</span>
          <span style={{"--i": 12}}>b</span>
          
          </div>
            </h1>
        </Container>
    </div>
    </>
  )
}

export default Navbar