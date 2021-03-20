import React from 'react';
import {useSelector} from "react-redux";

function Menus(props) {
    const data = useSelector((state) => state.menus.items);
    const comments = useSelector((state) => state.menus.comments);
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={event => event.stopPropagation()}>
                <div className="x" onClick={() => props.setActive(false)}>✖</div>
                <div className="left">
                    <div className="big_img">
                        <img className="img1" src={data.url} alt="IMG"/>
                    </div>
                    <div className="input_one">
                        <input type="text" placeholder="  Ваше имя" />
                    </div>
                    <div className="input_one">
                        <input type="text" placeholder="  Ваш комментарий" />
                    </div>
                    <div className="button_one">
                        <button className="button">
                            Оставить комментарий
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="comments">
                        <div className="date2">18.12.2020</div>
                        <div className="comm">{comments.text}</div>
                    </div>
                    <div className="comments">
                        <div className="date2">18.12.2020</div>
                        <div className="comm">Я тут был, очень понравилось</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menus;