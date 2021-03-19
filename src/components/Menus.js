import { useParams } from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadMenus} from "../redux/actions";
import Menu from "./Menu";

function Menus(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menus.items)
    useEffect(() => {
        dispatch(loadMenus(params.id))
    }, [])
    return (
        <div>
            {/*{menus.map((menu) => {*/}
            {/*  return  <Menu menu={menu} />*/}
            {/*})}*/}
        </div>
    );
}

export default Menus;