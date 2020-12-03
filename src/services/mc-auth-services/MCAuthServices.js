import {JAVA_SERVER_URL} from "../../constants/spotifyAPIConstants";

export default class MCAuthServices {
    registerUsername(user, code) {
        return fetch(JAVA_SERVER_URL + "register?code=" + code, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json());
    }

    verifyUsername(userId, username) {
        return fetch(JAVA_SERVER_URL + "login/" + userId + "/" + username, {
            method: 'GET',
        }).then(resp => resp.json());
    }
}
