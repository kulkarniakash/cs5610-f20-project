import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse" style={{borderRadius: 0}}>
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right' style={{marginRight: '20px'}}>
                <li><a href='#'>Sign in</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;