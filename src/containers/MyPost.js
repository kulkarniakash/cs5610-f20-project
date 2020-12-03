import React from "react";
import {connect} from "react-redux";
import MCCrudServices from "../services/mc-crud-services/MCCrudServices";

class MyPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }

    changePostContent(evt) {
        this.setState({post: evt.target.value});
    }

    render() {
        return(
            <div className="container">
                <div className="login-card">
                    <h1 className="register card-header">My New Post</h1>
                    <div className="card-body">
                        <div className="form-group row card-text">

                            <div className="login-username col-sm-9">
                                <textarea id="w3review" placeholder="whats up" name="w3review" rows="4" cols="50"
                                onChange={(evt) => this.changePostContent(evt)}></textarea>
                            </div>

                        </div>
                        <a href={"/"} onClick={() => new MCCrudServices().addPost(this.props.accessToken, {
                            post: this.state.post,
                            author_id: this.props.userObject.id
                        })} className="login-button btn btn-primary">Done</a>

                    </div>

                </div>


            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    accessToken: state.spotifyAuth.accessToken,
    userObject: state.spotifyAuth.currentUserObject
})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(MyPost)
