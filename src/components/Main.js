import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadImage} from "../redux/actions";
import Image from "./Image";

function Main(props) {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.items);
    useEffect(() => {
        dispatch(loadImage())
    }, [])
    return (
        <div className="center">
            {images.map((data) => {
                return(<Image data={data} key={data.id} />);
            })}
        </div>
    );
}

export default Main;