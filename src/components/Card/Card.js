import React from 'react';
import style from './Card.css'
import Game from '../Counter'

function CartoonCard (props){
return (   
    
    <div className="card" >
            <img className="click-item"  state={props.checked} id={props.id} alt={props.name} src={props.image} style={props.style} onClick={() =>props.handleCount(props.id, props.checked)}/>
   </div>
)
}

export default CartoonCard;