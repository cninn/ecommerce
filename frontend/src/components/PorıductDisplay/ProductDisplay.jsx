import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'


const ProductDisplay = (props) => {

    const {product} = props;
    const {addTocart} = useContext(ShopContext);


  return (
    <div className='product-display'>
      <div className="prodisp-left">
    <div className="img-list">
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
    </div>
    <div className="display-img">
    <img className='display-main' src={product.image} alt="product" />
    </div>
      </div>
      <div className="prodisp-right">
        <p className='titleProduct'>{product.name}</p>
        <div className="star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="prices">
        <div className="old-price">
            <p>{product.old_price} $</p>
          </div>
          <div className="price">
            <p>{product.new_price} $</p>
          </div>
       {/*  <Link></Link> */}
          <button onClick={() => addTocart(product.id)} >Add To Cart</button>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, placeat. Illum saepe inventore consequatur, repudiandae enim quisquam, nobis placeat, adipisci illo veritatis sunt voluptates sed quam dicta! Doloribus, quos illum.
          Itaque ducimus voluptas ea libero. Similique molestias quia doloremque in dolorem eaque. Dolorem eius voluptatem eaque tempora fugit accusamus cupiditate fugiat aliquid doloremque ab? Eos dolore obcaecati quibusdam unde animi!</p>

        </div>
        <div className="size">
            <p>Select Size</p>
            <div className="sizes">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
            </div>
        </div>
      
        <p className='procategory'>
            <span className='procat'>Category:</span>
            Women T-Shirts, Shirts
        </p>
        <p className='procategory'>
            <span className='procat'>Tags:</span>
            Modern, latest
        </p>

      </div>
    </div>
  )
}

export default ProductDisplay
