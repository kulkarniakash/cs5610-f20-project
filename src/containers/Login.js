import React from "react";
import {Link} from "react-router-dom";
import {AUTH_REDIRECT_URI, CLIENT_ID, SPOTIFY_ACCOUNT_URL} from "../constants/spotifyAPIConstants";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.LINK_TO_AUTH = SPOTIFY_ACCOUNT_URL + '/authorize/?client_id' + '=' + CLIENT_ID + '&response_type=code' +
            '&redirect_uri=' + AUTH_REDIRECT_URI;
        }


    render() {
        return (
            <div>
                <a  href={this.LINK_TO_AUTH}>
                    spotify sign
                </a>
            </div>

        )
    }
}
