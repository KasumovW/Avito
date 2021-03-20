import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";
import Menus from "./Menus";

function App() {
    const loading1 = useSelector((state) => state.images.loading);
    return (
        <div className="App">
            <Header />
            <Route path="/:id?">
                {loading1 ? <h1>Loading...</h1> : (
                    <Main />
                )}
                <Menus />
            </Route>
            <Footer />
        </div>
    );
}

export default App;