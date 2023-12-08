import './App.scss';
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Main />
        </div>
    );
}

export default App;
