import {JAVA_SERVER_URL} from "../../constants/spotifyAPIConstants";

export default class MCCrudServices {
    addPost(accessToken, post) {
        return fetch(JAVA_SERVER_URL + 'posts?access_token=' + accessToken, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json());
    }
}
