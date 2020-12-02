import React from "react";
import ReactDOM from 'react-dom'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.css'
import '../../css/NewsFeed.css'
import '@fortawesome/fontawesome-free'

export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLike: false
        }
        this.changeShowLike = this.changeShowLike.bind(this);

    }

    changeShowLike() {
        this.setState({
            showLike: !this.state.showLike
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="card card1">

                        <div className="card-body">
                            <div className="card-head">
                                <span>
                                    <img className="avatar-img" src="../../photo.png" className="avatar"/>
                                    <a className="card-title user-name">User Name</a>
                                </span>

                                <select type="button" className="btn dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">

                                        <option value="1">Action1</option>
                                        <option value="2">Action2</option>

                                </select>


                                <hr/>
                            </div>
                            <p className="card-text text-wrap">Please type in somethingbmbnmbnmbnmbnmbsdfsdfsdfsdfsdfsdfsdfdsfdsfnmbnmbnmbnmbnm</p>
                            <img className="card-img-top card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/72/Basketball_Clipart.svg" alt="Upload image if need"/>
                        </div>
                    {this.state.showLike &&
                        <button onClick={() => this.changeShowLike()} className='heart'><i
                            className="fa fa-heart"></i></button>
                    }
                    {!this.state.showLike &&
                        <button onClick={() => this.changeShowLike()} className='heart1'><i className="fa fa-heart-o"></i></button>
                    }
                    <button className='comment'><i className="fa fa-comment"></i></button>



                </div>
            </div>
        )
    }
}
