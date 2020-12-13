const initialState = {
    posts:[
        {"id": "1", "username": "mandy", "text": "hello mandy"},
        {"id": "2", "username": "bread", "text": "hello bread"}
    ],
    post: null
    // username: null,
    // text: null
}

export const anonyFeedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_POST_BY_ID":



        default:
            return state
    }
}
