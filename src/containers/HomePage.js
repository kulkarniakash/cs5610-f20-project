import React from "react";
import NavBar from "../components/NavBar";
import '../css/homepage.css'

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='wbdv-homepage'>
                <div className='wbdv-heading'>
                    <h1>Musician's Corner</h1>
                </div>
                <NavBar/>
            </div>
        )
    }
}

export default HomePage;