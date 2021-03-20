import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadMenus} from "../redux/actions";
import Menu from "./Menu";
import '../modal.css';
import Modal from "./Modal";

function Menus(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menus.items)
    const [modalActive, setModalActive] = useState(true);


    useEffect(() => {
        dispatch(loadMenus(params.id))
    }, [params])


    return (
        <div>
            <button className='as' onClick={() => setModalActive(true)}>Click!</button>
            <Modal active={modalActive} setActive={setModalActive} />
            {menus.map((menu) => {
                return  <Menu menu={menu} />
            })}
        </div>
    );
}

export default Menus;