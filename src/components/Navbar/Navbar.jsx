import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav__container'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/certificates"><p>Certificates</p></Link>
        <Link to="/projects"><p>Projects</p></Link>
    </div>
  )
}

export default Navbar