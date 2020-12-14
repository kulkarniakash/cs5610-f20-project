import React from "react";
import {Link} from "react-router-dom";
import "../../css/profile/MyProfile.css"
import {updateCurrentUserObj} from "../../actions/authActions";
import {getMCUser} from "../../actions/mcCrudActions";
import {connect} from "react-redux";

class myProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        console.log("entered my profile")
        this.props.updateCurrentUserObj(this.props.spotifyUserId)
    }

    render() {
        return(
            <div className="container">
                <div className="login-card">
                            <span>
                                <img className="avatar-img" src={require('../../photo.png')} className="avatar" />
                                {this.props.currentUserObj.username}
                            </span>
                            <button className="btn dropdown-toggle edit-btn"
                                    aria-haspopup="true" aria-expanded="false">
                                Edit Profile
                            </button>
                    <div className="card-body">
                        <div className="form-group row card-text">

                            <div className="login-username col-sm-9">
                                First Name: {this.props.currentUserObj.first_name}
                            </div>
                            <div className="login-username col-sm-9">
                                Last Name: {this.props.currentUserObj.last_name}
                            </div>

                        </div>
                        <Link to='/' className="login-button btn btn-primary">Back to main page</Link>

                    </div>

                </div>


            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    spotifyUserId: state.spotifyAuth.currentUserObject.id,
    currentUserObj: state.mcAuthUser
})

const mapDispatchToProps = (dispatch) => ({
    updateCurrentUserObj: (uid) => getMCUser(uid, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(myProfile)
