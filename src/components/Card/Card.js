import React from 'react';
import style from './Card.css'

function CartoonCard (props){


return (   
    <div className={`card${props.shake ? ' shake': ''}`}>
            <img className="click-item"  state={props.checked} id={props.id} alt={props.name} src={props.image} style={props.style} onClick={() =>props.handleCount(props.id, props.checked)}/>
   </div>
)
}

export default CartoonCard;