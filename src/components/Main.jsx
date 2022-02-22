import Nav from "./Nav";
import Profile from "./Profile";


const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <Nav />
                    <Profile />
                </div>
            </div>
        </main>
    );
}

export default Main;