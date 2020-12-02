import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {AUTH_REDIRECT_URI, CLIENT_ID, SPOTIFY_ACCOUNT_URL} from "../constants/spotifyAPIConstants";
import {updateAccessToken, updateAuthCode, updateCurrentUserObj, updateIsLoggedIn} from "../actions/authActions";
import {connect} from 'react-redux';

const NavBar = ({user, updateIsLoggedIn, updateAuthCodeProp, updateAccessTokenProp, updateUserObjProp}) => {
    const LINK_TO_AUTH = SPOTIFY_ACCOUNT_URL + '/authorize/?client_id=' + CLIENT_ID + '&response_type=code' +
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
                <li><a href={LINK_TO_AUTH} onClick={() => updateIsLoggedIn(true)}>Sign in</a></li>) ||
                    <li><Link to='/logout' onClick={() => {
                        updateAuthCodeProp(null);
                        updateAccessTokenProp(null, null);
                        localStorage.setItem('auth_code', null);
                        localStorage.setItem('access_token', null);
                        localStorage.setItem('refresh_token', null);
                        updateIsLoggedIn(false);
                        updateUserObjProp(null);
                    }}>
                        Sign out
                    </Link></li>
                }
            </ul>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateAccessTokenProp: (accessToken, refreshToken) => updateAccessToken(accessToken, refreshToken, dispatch),
    updateAuthCodeProp: (code) => updateAuthCode(code, dispatch),
    updateIsLoggedIn: (isLoggedIn) => updateIsLoggedIn(isLoggedIn, dispatch),
    updateUserObjProp: (obj) => updateCurrentUserObj(obj, dispatch)
})

export default connect(null, mapDispatchToProps)(NavBar);
