import React from 'react';
import {Link} from "react-router-dom";

function Image(props) {
    return (
        <div className="block">
            <Link to={`/${props.data.id}`}>
                <div className="image">
                    <img src={props.data.url} alt="Img" className="img"/>
                </div>
            </Link>
        </div>
    );
}

export default Image;