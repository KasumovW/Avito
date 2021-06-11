import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Menus(props) {
  const data = useSelector((state) => state.menus.items);
  const comments = useSelector((state) => state.menus.items.comments);
  return (
    <div className={props.active ? "modal active" : "modal"}>
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(event) => event.stopPropagation()}
      >
        <NavLink to="/">
          <div className="x" onClick={() => props.setActive(false)}>
            ✖
          </div>
        </NavLink>
        <div className="left">
          <div className="big_img">
            <img className="img1" src={data.url} alt="IMG" />
          </div>
          <div className="input_one">
            <input type="text" placeholder="  Ваше имя" />
          </div>
          <div className="input_one">
            <input type="text" placeholder="  Ваш комментарий" />
          </div>
          <div className="button_one">
            <button className="button">Оставить комментарий</button>
          </div>
        </div>
        {comments === undefined
          ? undefined
          : comments.map((comm) => {
              return (
                <div className="right">
                  <div className="comments">
                    <div className="date2">{comm.date}</div>
                    <div className="comm">{comm.text}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Menus;
