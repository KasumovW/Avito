import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadComments, loadImage, loadMenus} from "../redux/actions";
import Image from "./Image";
import {useParams} from "react-router-dom";

function Main(props) {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.items);
    useEffect(() => {
        dispatch(loadImage())
    }, [])

    const params = useParams();
    useEffect(() => {
        dispatch(loadMenus(params.id))
    }, [params])

    useEffect(() => {
        dispatch(loadComments(params.id))
    }, [])

    return (
        <div className="center">
            {images.map((data) => {
                return(<Image modalActive={props.modalActive} setModalActive={props.setModalActive} data={data} key={data.id} />);
            })}
        </div>
    );
}

export default Main;