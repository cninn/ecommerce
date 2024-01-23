import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/Breadcrums/BreadCrums';
import ProductDisplay from '../components/PorıductDisplay/ProductDisplay';
import './CSS/Product.css'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {

 


  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((p) => p.id === Number(productId));


  return (
    <div className='productmain'>
     <BreadCrums product={product}/>
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProducts />
    </div>
  )
}

export default Product
