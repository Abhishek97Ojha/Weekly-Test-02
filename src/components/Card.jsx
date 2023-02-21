import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <div className="cardImg">
            <img src={props.image} alt="" />
        </div>
        <div className="cardName">
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default Card