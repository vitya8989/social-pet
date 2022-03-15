import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let myPostsData = [
    {
        text: 'Привет, это мой первый пост',
        countLikes: '3'
    },
    {
        text: 'Привет, это мой второй пост',
        countLikes: '4'
    },
    {
        text: 'Привет, это мой третий пост',
        countLikes: '8'
    },
];

let profileData = {
    myPostsData: myPostsData
};

let usersData = [
    {
        name: 'Петр',
        id: '1'
    },
    {
        name: 'Наташа',
        id: '2'
    },
    {
        name: 'Василий',
        id: '3'
    },
    {
        name: 'Женя',
        id: '4'
    },
    {
        name: 'Аня',
        id: '5'
    },
    {
        name: 'Петр',
        id: '6'
    },
    {
        name: 'Наташа',
        id: '7'
    },
    {
        name: 'Василий',
        id: '8'
    },
    {
        name: 'Женя',
        id: '9'
    },
    {
        name: 'Аня',
        id: '10'
    },
];

let usersMessagesData = [
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    }, {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    }, {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    }, {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    }, {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    }, {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
    {
        text: 'Привет'
    },
    {
        text: 'Как дела?'
    },
];

let dialogsData = {
    usersData: usersData,
    usersMessagesData: usersMessagesData
};

ReactDOM.render(
      <React.StrictMode>
        <App profileData={profileData} dialogsData={dialogsData} />
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
