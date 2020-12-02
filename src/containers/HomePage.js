import React from "react";
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import NavBar from "../components/NavBar";
import '../css/homepage.css'
import SpotifyAuthServices from "../services/spotify-auth-services/SpotifyAuthServices";
import SearchResults from "./SearchResults";
import NewsPost from "./News/NewsPost";
import TrackDetails from "../components/TrackDetails";
import Login from "./Login";
import Register from "./Register";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authCode: null,
            accessToken: null,
            refreshToken: null,
            currentUserObject: null
        }

        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    async componentDidMount() {
        //introduce error message in case authorization fails
        const {location: {search}} = this.props;
        let searchParams = new URLSearchParams(search);
        if(searchParams.has("code")) {
            new SpotifyAuthServices().getTokens(searchParams.get("code")).then(resp => {
                if (resp.error === undefined) {
                    localStorage.setItem('access_token', resp.access_token);
                    localStorage.setItem('refresh_token', resp.refresh_token);
                }
                this.setState({
                    authCode:searchParams.get("code"),
                    accessToken: localStorage.getItem('access_token'),
                    refreshToken: localStorage.getItem('refresh_token')
                })
                new SpotifyAuthServices().getCurrentUserProfile(this.state.accessToken).then(resp => {
                    this.setState({
                        currentUserObject: resp
                    })
                })
            });
        }

    }

    isLoggedIn() {
        if (this.state.currentUserObject === null || this.state.currentUserObject.error !== undefined) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return(
            <div className='wbdv-homepage'>
                <div className='wbdv-heading'>
                    <h1>Musician's Corner</h1>
                </div>
                <NavBar user={this.state.currentUserObject}/>
                {this.isLoggedIn() &&
                    <Router>
                        <Switch>
                            <Route path='/trackdetails/:id' children={<TrackDetails accessToken={this.state.accessToken}/>}/>
                            {/*<Route path='/' children={<SearchResults accessToken={this.state.accessToken}/>}/>*/}
                            {/*<Route path='/' children={<NewsPost/>}></Route>*/}

                        </Switch>
                    </Router>
                }
                {!this.isLoggedIn() &&
                    <Router>
                        <Switch>
                            <Route path='/' children={<Login/>}></Route>
                            <Route path='/register' children={<Register/>}></Route>
                        </Switch>
                    </Router>
                }
            </div>
        )
    }
}

export default withRouter(HomePage);
