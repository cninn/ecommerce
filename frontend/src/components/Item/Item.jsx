import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} style={{textDecoration: 'none'}} to={`/product/${props.id}`}>
    <div className='item'>
      <div className="img-container">
      <img src={props.image} alt="..." />
      </div>
   
      <p className='item-name'>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
          <p>{props.new_price} $</p>
        </div>
        <div className="item-prices-old">
          <p>{props.old_price} $</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Item
