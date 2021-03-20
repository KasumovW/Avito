import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import Menus from "./Menus";
import '../modal.css';

function App() {
    const loading1 = useSelector((state) => state.images.loading);
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <Header />
            <Route path="/:id?">
                {loading1 ? <h1>Loading...</h1> : (
                    <Main modalActive={modalActive} setModalActive={setModalActive} />
                )}
                <Menus active={modalActive} setActive={setModalActive} />
            </Route>
            <Footer />
        </div>
    );
}

export default App;