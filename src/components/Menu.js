import React from 'react';

function Menu(props) {
    return (
        <div>
            <div className="div">
                {props.menu.id}
            </div>
        </div>
    );
}

export default Menu;