import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Menu = () =>{

  const navigation = useNavigate();
    return(
        <div className="navbar-style">
            <div className="logo"><h2>Logo</h2></div>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/about">About Us </Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">contact </Link>
                <Link to="/signin" onClick={()=>{navigation('/Signin')}} >Signin</Link>
                {/*<div onClick={()=>{navigation('/Signin')}} >Signin</div>*/}
            </nav>

        
        </div>
    )
}
export default Menu;