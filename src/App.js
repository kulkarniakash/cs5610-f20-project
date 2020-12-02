import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free'
import './App.css';
import HomePage from "./containers/HomePage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore, compose} from "redux";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({spotifyAuth: authReducer})

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          spotifyAuth: {
              authCode: null,
              accessToken: null,
              refreshToken: null,
              currentUserObject: null,
              isLoggedIn: false
          }
      }
    }

    /*componentDidMount() {
      if(localStorage.getItem(''))
    }*/

    render() {
        return (
            <Provider store={createStore(rootReducer, {spotifyAuth: this.state.spotifyAuth}, enhancers)}>
                <Router>
                    <Route path='/' children={<HomePage/>}/>
                </Router>
            </Provider>
        );
    }
}
