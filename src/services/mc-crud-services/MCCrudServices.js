import {JAVA_SERVER_URL} from "../../constants/spotifyAPIConstants";

export default class MCCrudServices {
    addPost(authorId, accessToken, post) {
        console.log("add called")
        return fetch(JAVA_SERVER_URL + 'posts/' + authorId + '?access_token=' + accessToken, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json());
    }

    getAllPosts() {
        return fetch(JAVA_SERVER_URL + 'posts').then(resp => resp.json());
    }


    deletePostByPostId = (pid, access_token) =>
        fetch(JAVA_SERVER_URL + '/delete_post' + '/' + pid + "?access_token="
            +access_token, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())

    // deletePostByPostId(pid) {
    //     fetch(JAVA_SERVER_URL/${pid},{
    //         method: "DELETE"
    //     }).then(response => response.json())
    //
    // }
    //updatePostByPostId
    //findPostByUserId



}
