import React, { useState , useEffect } from 'react'
import './AllProduct.css'
import ProductCard from './ProductCard'
// import img1 from '../../ASSETS/f2.svg'
// import img2 from '../../ASSETS/f3.svg'
// import img3 from '../../ASSETS/f4.svg'
// import img4 from '../../ASSETS/f5.svg'
// import img5 from '../../ASSETS/f6.svg'


function AllProduct() {
  
  const [products,setProduct]=useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product/getall')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item,index) => {
            return (
              <ProductCard key_={index} data={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct