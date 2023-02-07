import Friends from "./Friends";

const FriendsContainer = (props) => {

    let friends = props.store.getState().sidebar.friends;

    return (
        <Friends friends={friends}/>
    );
}

export default FriendsContainer;