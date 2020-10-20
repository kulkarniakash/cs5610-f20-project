import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const NavBar = () => {
    const {loginWithRedirect} = useAuth0();
    const {logout} = useAuth0();
    const {isAuthenticated} = useAuth0();
    return (
        <nav className="navbar navbar-inverse" style={{borderRadius: 0}}>
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>

                {isAuthenticated &&
                <Route path='/signed-in'>
                    <li>
                        <a href='#'>My Songs</a>
                    </li>
                </Route>}
            </ul>
            <ul className='nav navbar-nav navbar-right' style={{marginRight: '20px'}}>
                <li><a onClick={() => loginWithRedirect()}>Sign in</a></li>
                {isAuthenticated &&
                <Route path='/signed-in'>
                    <li><a onClick={() => logout(
                        {returnTo: window.location.origin}
                        )}>Log Out</a></li>
                </Route>}
            </ul>
        </nav>
    )
}

export default NavBar;