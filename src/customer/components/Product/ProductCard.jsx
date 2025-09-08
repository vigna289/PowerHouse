import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer relative'>
      <div className='h-[23rem]'>
        <img className="h-[15rem] w-full object-cover object-left-top" src={product.images && product.images.length > 0 ? product.images[2] : '/placeholder.png'} alt="">
        </img>
        <div className='textPart bg-white p-3 bottom-0 left-0 right-0'>
          <div>
            <p className='font-bold opacity-60'>
              {product.brand}
            </p>
            <p>
              {product.title}
            </p>
          </div>
          <div className='flec items-center space-x-2'>
            <p className='font-semibold'>
              $ {product.price}
            </p>
            <p className='line-through opacity-50'>
              {product.discountPercentage}%
            </p>
            <p className='text-green-600 font-semibold'>
              Goodwill : {product.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
