import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AUTH_REDIRECT_URI, CLIENT_ID, SPOTIFY_ACCOUNT_URL} from "../constants/spotifyAPIConstants";

const NavBar = ({user}) => {
    const LINK_TO_AUTH = SPOTIFY_ACCOUNT_URL + '/authorize/?client_id' + '=' + CLIENT_ID + '&response_type=code' +
        '&redirect_uri=' + AUTH_REDIRECT_URI;
    return (
        <nav className="navbar navbar-inverse" style={{borderRadius: 0}}>
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>

                {//isAuthenticated &&
                <Route path='/signed-in'>
                    <li>
                        <a href='#'>My Songs</a>
                    </li>
                </Route>}
            </ul>
            <ul className='nav navbar-nav navbar-right' style={{marginRight: '20px'}}>
                {(user === null &&
                <li><a href={LINK_TO_AUTH}>Sign in</a></li>) ||
                    <li><a href='#'>Sign out</a></li>
                }
            </ul>
        </nav>
    )
}

export default NavBar;