const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    users: [
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            name: 'Петр',
            id: '1'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/if1/zbarwhX1YWm1jZ5etM3suNMIOPrjgYSBk0jf8auNzuMlENostkebuwzAzfReI9Og8OCeKuWP.jpg?size=50x50&quality=96&crop=450,303,447,447&ava=1',
            name: 'Наташа',
            id: '2'
        },
        {
            img: 'https://sun2-11.userapi.com/s/v1/if2/zyNYbjkZlwr5m7rbeVooYHkHxc1FEBrxsODu_EC7krLO9cCcNjsn24tCwFycQQaKqzx1DlE9Dn15TqOn7cS77iof.jpg?size=50x50&quality=96&crop=0,614,1442,1442&ava=1',
            name: 'Василий',
            id: '3'
        },
        {
            img: 'https://sun2-3.userapi.com/s/v1/ig2/-bl2CA6AQF857paICuqKOxpGUTyJ8GpQHvgmKJu8axEyHBwjBZ5V2jOJfpEDdQBqkz8jcPk6QAPEM5SfUhgQthfq.jpg?size=50x50&quality=96&crop=228,250,250,250&ava=1',
            name: 'Женя',
            id: '4'
        },
        {
            img: 'https://sun2-12.userapi.com/s/v1/if1/LtrSh8KilesHrZLHhcs61I5xC4p0iPVhp2IQvm0nCI15v5fLgl0UgAni1v82IVEZ6LRpYrBD.jpg?size=50x50&quality=96&crop=0,506,1537,1537&ava=1',
            name: 'Аня',
            id: '5'
        },
        {
            img: 'https://sun2-3.userapi.com/s/v1/ig2/LR140Fe7ujIo_9RXPoUJWY5ng4YMYgC40xm8fYfT8A-igoJDkCrtwlwCnGIFNLN68sDuBuwnTsrnx9EFRaCB9H5O.jpg?size=50x50&quality=96&crop=0,0,1439,1439&ava=1',
            name: 'Петр',
            id: '6'
        },
        {   img: 'https://sun2-12.userapi.com/s/v1/ig2/iYMZwNk5A_3-Aa8-sFe6lOkSDmVUXGxrRmgbHnnrqC6bhTuNHYMQvg7THtA_bU4q0YH-zoJ7G9zqmu7NK0DdguH3.jpg?size=50x50&quality=95&crop=320,564,1014,1014&ava=1',
            name: 'Наташа',
            id: '7'
        },
        {
            img: 'https://sun2-12.userapi.com/s/v1/ig2/0VfhypJ4vJPFfTwrnQAWhueQwwQEAwd8TSO0-rjHyqyG2gogP3nEEaD60Wbwnnc-7Ja2Q0uItUkLP77IxE7TJYbz.jpg?size=50x50&quality=96&crop=158,455,1015,1015&ava=1',
            name: 'Василий',
            id: '8'
        },
        {
            img: 'https://sun2-12.userapi.com/s/v1/ig2/t_MUn2HuElFZQ2Z65mdp2mqEmqv_OMLObAeiQVPkM8UuLr84Fs6JxBr2CNgrmcT7csYtjFslHYYPpbhNRCRvKnea.jpg?size=50x50&quality=95&crop=134,355,435,435&ava=1',
            name: 'Женя',
            id: '9'
        },
        {
            img: 'https://sun2-10.userapi.com/s/v1/ig2/kIk-QBvPSLPWhJhTTPq091BPwV_TpLxPQP-goHO2KPEuLIcNDoE7tkv18_6_wl3CRnFdA6GCBJBso9MSoAnpn5U4.jpg?size=50x50&quality=95&crop=184,59,1157,1157&ava=1',
            name: 'Аня',
            id: '10'
        },
    ],
    usersMessages: [
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Привет!)'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Как дела?'
        },
        {
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            incoming: false,
            text: 'Привет!)'
        },
        {
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            incoming: false,
            text: 'Хорошо, а твои?'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Мои тоже неплохо.'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Видел, Витек социальную сеть пилит?)'
        },
        {
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            incoming: false,
            text: 'Да, сейчас актуально!'
        },
        {
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            incoming: false,
            text: 'Инстаграм заблокировали же, вдруг его приложение станет популярным)'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Ладно, давай, побегу я, дела.'
        },
        {
            img: 'https://sun2-4.userapi.com/s/v1/ig2/YvOkwoWX4p2eLz16Sq0e6h0mXKCAmsP_nS6U-gYpry4QxykFAIs3-inLML5BrtDEwcTcwj8MVnrYbPLFY6UZ0UwH.jpg?size=50x50&quality=96&crop=0,0,400,400&ava=1',
            incoming: true,
            text: 'Всего тебе хорошего!'
        },
        {
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            incoming: false,
            text: 'Пока!'
        },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                incoming: false,
                text: state.newMessageText,
            }
            state.usersMessages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const AMActionCreator = () => ({
    type: ADD_MESSAGE
})

export const UNMTActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})

export default dialogsReducer;