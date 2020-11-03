import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free'
import './App.css';
import HomePage from "./containers/HomePage";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <Route path='/' children={<HomePage/>}/>
      </Router>
  );
}

export default App;
