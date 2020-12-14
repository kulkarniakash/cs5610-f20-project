import React from "react";
import ReactDOM from 'react-dom'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.css'
import '../../css/NewsPost.css'
import '@fortawesome/fontawesome-free'
import NewsPost from "./NewsPost";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MCCrudServices from "../../services/mc-crud-services/MCCrudServices";
import {getAllPosts} from "../../actions/mcCrudActions";

class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            hasLoaded: false
        }
    }

    componentDidMount() {
        this.props.updatePosts()
        this.setState({hasLoaded: true})
        /*new MCCrudServices().getAllPosts().then(postData => {
            this.setState({posts: postData, hasLoaded: true})
        })*/
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        new MCCrudServices().getAllPosts().then(postData => {
            this.setState({posts: postData, hasLoaded: true})
        })
    }*/

    render() {
        if (!this.state.hasLoaded) {
            return <h2>Loading...</h2>
        }

        return(

            <div className="container">
                <div>
                    <label htmlFor='search'>Search feed:</label>
                    <input id='search' placeholder='Feed Name' onChange={(evt) => {
                        this.setState({
                            searchText: evt.target.value
                        })
                    }} />
                    <button className='btn btn-outline-danger' >Search</button>

                    <Link to={'/my-post'} className='my-new-post'>My New Post</Link>
                </div>

                <hr/>
                {
                    this.props.posts.map(post =>
                        <div key={post.id}>
                            <NewsPost post={post}/>
                        </div>
                    )
                }
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => ({
    posts:state.loginFeedsReducer.posts,

})

const propertyToDispatchMapper = (dispatch) => ({
    updatePosts: () => getAllPosts(dispatch)
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(NewsFeed)
