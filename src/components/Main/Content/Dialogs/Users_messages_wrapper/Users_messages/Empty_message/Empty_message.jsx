import style from './Empty_message.module.scss';

const Empty_message = (props) => {
    return (
        <div className={style.empty_message}>
            Здесь еще нет сообщений
        </div>
    );
}

export default Empty_message;