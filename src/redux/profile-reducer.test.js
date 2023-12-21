import profileReducer, {APActionCreator, deletePost} from "./profile-reducer";

let state = {
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
};

test('length of post should be incremented', () => {
    let action = APActionCreator('new post');

    let newState = profileReducer(state, action);
    expect(newState.myPosts.length).toBe(4);
});

test('text of new post should be correct', () => {
    let action = APActionCreator('new post');

    let newState = profileReducer(state, action);
    expect(newState.myPosts[3].text).toBe('new post');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.myPosts.length).toBe(2);
});

test('after deleting length of messages should`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect(newState.myPosts.length).toBe(3);
});
