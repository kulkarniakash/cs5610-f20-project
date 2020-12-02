import React from "react";
import NewsPost from "../News/NewsPost";
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.css'
import '../../css/NewsFeed.css'
import '@fortawesome/fontawesome-free'
import AnonyPost from "./AnonyPost";

export default class AnonyFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLike: false
        }
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
                    this.updateSearchResults()
                }}>Search</button>

                <hr/>
                <div className="news-feed">
                    <AnonyPost/>
                </div>
            </div>
        )
}
}
