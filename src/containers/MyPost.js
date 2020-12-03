import React from "react";
import {connect} from "react-redux";

class MyPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="container">
                <div className="login-card">
                    <h1 className="register card-header">My New Post</h1>
                    <div className="card-body">
                        <div className="form-group row card-text">

                            <div className="login-username col-sm-9">
                                <textarea id="w3review" placeholder="whats up" name="w3review" rows="4" cols="50"></textarea>
                            </div>

                        </div>
                        <a href={"/"} className="login-button btn btn-primary">Done</a>

                    </div>

                </div>


            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({


})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(MyPost)
