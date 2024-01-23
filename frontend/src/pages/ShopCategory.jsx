import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../context/ShopContext'
import dropdownicon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'


const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext);


  return (
    <div className='shop-category'>
      <img src={props.banner} className="category-img" alt="..." />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <span>
          Sort by
          </span>
          <img src={dropdownicon} alt="dropdown" />
        </div>
      </div>
      <div className="category-products">
    {
      all_products.map((item)=>{
        if(item.category === props.category){
          return <Item key={item.id} {...item} />

        }
        else{
          return null
        }
      })
    }
      </div>
      <div className="loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
