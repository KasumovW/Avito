import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {Route, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadMenus} from "../redux/actions";
import Menus from "./Menus";
import '../modal.css';

function App() {
    const loading1 = useSelector((state) => state.images.loading);
    const [modalActive, setModalActive] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMenus(params.id))
    }, [params])

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