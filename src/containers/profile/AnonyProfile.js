import React from "react";
import {Link} from "react-router-dom";
import "../../css/profile/LoginProfile.css"
export default class AnonyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return(
            <div className="container">
                <div className="login-card">
                            <span>
                                <img className="avatar-img" src={require('../../photo.png')} className="avatar" />
                                    USER NAME
                            </span>
                    <div className="card-body">
                        <div className="form-group row card-text">

                            <div className="login-username col-sm-9">
                                Bio information here, you can update by click edit btn



                            </div>

                        </div>

                        <a className="login-button btn btn-primary anony-profile-btn">Back to main page</a>

                    </div>

                </div>


            </div>

        )
    }
}
