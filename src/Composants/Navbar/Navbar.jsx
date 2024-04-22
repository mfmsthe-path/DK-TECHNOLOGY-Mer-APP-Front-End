import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Carticon from '../Assets/Carticon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop"); // Define menu state here

    return (
        <div className="Navbar">
            <div className="nav-logo">
                <p> DK-TECHNOLOGY</p>
            </div>
            <ul className="Nav-menu">
                <li onClick={() => { setMenu("Home") }}>    <Link style={{textDecoration:'none'}} to='/'>Home</Link> {menu === "Home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Models") }}>   <Link style={{textDecoration:'none'}} to='/Models'>Models</Link>  {menu === "Models" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Categories")}}><Link style={{textDecoration:'none'}} to='/Categories'>Categories </Link> {menu === "Categories" ? <hr /> : <></>}</li>
            </ul>
            <div className="Nav-login-cart">
              <Link to='/Login'> <button> Login</button></Link>
              <Link to='/Cart'> <img src={Carticon} alt="Cart icon" /></Link>
                <div className="nav-cart-count">0
                </div>
            </div>
        </div>
    );
};

export default Navbar;
