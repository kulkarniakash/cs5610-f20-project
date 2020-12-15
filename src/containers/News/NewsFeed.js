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

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            hasLoaded: false,
            searchText: null
        }

        this.updatePosts =this.updatePosts.bind(this);
    }

    componentDidMount() {
        this.props.updatePosts()
        this.setState({hasLoaded: true})
        /*new MCCrudServices().getAllPosts().then(postData => {
            this.setState({posts: postData, hasLoaded: true})
        })*/
    }


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(!this._isMounted)
    //         return;
    //     new MCCrudServices().getAllPosts().then(postData => {
    //         if(postData === prevState.posts) {
    //             return;
    //         }
    //         this.setState({posts: postData, hasLoaded: true})
    //     })
    // }


    updatePosts() {
        new MCCrudServices().getAllPosts().then(postData => {
            this.setState({posts: postData, hasLoaded: true})
        })
    }

    findMyPosts(posts) {
        for (i )
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
                    <button onClick={
                        () => new MCCrudServices().searchPosts(this.state.searchText)
                            .then(posts => {this.setState({
                                posts:posts.posts
                            })})
                    }
                            className='btn btn-outline-danger'>
                        Search
                    </button>

                    <button className='btn btn-outline-danger my-feed-btn'
                            onClick={() => new MCCrudServices().getAllPosts().then(postData => {
                                this.filter(postData)
                            })
                            }>My Posts</button>

                    <button className='btn btn-outline-danger btn-reported-post'>Reported Posts</button>


                    <Link to={'/my-post'} className='my-new-post'>My New Post</Link>
                </div>

                <hr/>
                {console.log(this.state.posts)}
                {
                    this.props.posts.map(post =>
                        <div key={post.id}>
                            <NewsPost post={post} accessToken={this.props.accessToken} updatePost={this.updatePosts}/>
                        </div>
                    )
                }
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => ({
    posts:state.loginFeedsReducer.posts,
    accessToken: state.spotifyAuth.accessToken

})

const propertyToDispatchMapper = (dispatch) => ({
    updatePosts: () => getAllPosts(dispatch)
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(NewsFeed)
