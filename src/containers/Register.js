import React from "react";
import "../css/register.css"
export default class Register extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card1">
                    <h1 className="register card-header">Register</h1>
                    <div className="card-body">
                        <div className="card2 form-group row card-text">

                            <div className="register-username col-sm-9">
                                Username
                                <input className="form-control wbdv-field wbdv-username" type="text" id="username"
                                       name="username"/>
                            </div>

                            <div className="firstname col-sm-9">
                                First Name
                                <input className="form-control wbdv-field wbdv-username" type="text" id="username"
                                       name="username"/>
                            </div>

                            <div className="lastname col-sm-9">
                                Last Name
                                <input className="form-control wbdv-field wbdv-username" type="text" id="username"
                                       name="username"/>
                            </div>
                        </div>
                        <button className="register-button btn btn-primary">Spotify Register</button>

                    </div>

                </div>


            </div>


        )
    }
}
