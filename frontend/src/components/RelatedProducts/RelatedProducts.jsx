import React from 'react'
import './RelatedProduct.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'



const RelatedProducts = () => {

    



  return (
  


    <div className='related-products'>
      <span>RELATED PRODUCTS</span>
      <div className="related-products-item">
        {
            data_products.map((item) => (
                <Item  key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
