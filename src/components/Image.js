import {Link} from "react-router-dom";

function Image(props) {
    return (
        <div className="block">
            <Link to={`/${props.data.id}`}>
                <div className="image">
                    <img onClick={() => props.setModalActive(true)} src={props.data.url} alt="Img" className="img"/>
                </div>
            </Link>
        </div>
    );
}

export default Image;