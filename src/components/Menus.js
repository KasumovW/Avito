import React from 'react';

function Menus(props) {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={event => event.stopPropagation()}>
                <div className="x" onClick={() => props.setActive(false)}>✖</div>
                <div className="left">
                    <div className="big_img">
                        <img className="img1" src="https://via.placeholder.com/600/92c952" alt="IMG"/>
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
                        <div className="date2">props.data.comments.date</div>
                        <div className="comm">props.data.comments.text</div>
                    </div>
                    <div className="comments">
                        <div className="date2">props.data.comments.date</div>
                        <div className="comm">props.data.comments.text</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menus;