const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myPosts: [
        {
            id: 1,
            text: 'Привет, это мой первый пост',
            countLikes: 3
        },
        {
            id: 2,
            text: 'Привет, это мой второй пост',
            countLikes: 4
        },
        {
            id: 3,
            text: 'Привет, это мой третий пост',
            countLikes: 8
        },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.myPosts[state.myPosts.length - 1].id + 1,
                text: state.newPostText,
                countLikes: 0,
            }
            state.myPosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const APActionCreator = () => ({
    type: ADD_POST
})

export const UNPTActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer;