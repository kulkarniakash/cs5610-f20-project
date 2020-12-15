import React from "react";
import NewsPost from "../News/NewsPost";
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.css'
import '@fortawesome/fontawesome-free'
import '../../css/NewsPost.css'
import {connect} from "react-redux";
import AnonyPost from "./AnonyPost";
import {getAllPosts} from "../../actions/mcCrudActions";

class AnonyFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLike: false
        }
    }

    componentDidMount() {
        this.props.updatePosts();
    }

    render() {
        return(
            <div className="container">
                <label htmlFor='search'>Search feed:</label>
                <input id='search' placeholder='Feed Name' onChange={(evt) => {
                    this.setState({
                        searchText: evt.target.value
                    })
                }} onKeyPress={(evt) => {
                    if (evt.key === 'Enter')
                        this.updateSearchResults()
                }}/>
                <button className='btn btn-outline-danger' onClick={() => {
                    this.props.updatePosts()
                }}>Search</button>

                <hr/>
                {
                    this.props.posts.map(post =>
                        <div key={post.id}>
                            <AnonyPost post={post}/>
                        </div>
                    )
                }
            </div>
        )
}
}

const stateToPropertyMapper = (state) => ({
    posts:state.anonyFeedsReducer.posts,

})

const propertyToDispatchMapper = (dispatch) => ({
    updatePosts: () => getAllPosts(dispatch)
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(AnonyFeed)
