const initialState = {
    posts:[
        {"id": "1", "username": "mandy", "text": "hello mandy"},
        {"id": "2", "username": "bread", "text": "hello bread"}
    ],
    // username: null,
    // text: null
}

export const anonyFeedsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
