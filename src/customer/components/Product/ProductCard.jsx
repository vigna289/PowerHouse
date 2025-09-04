import React from 'react'

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className="h-full w-full object-cover object-left-top" src="http://1.bp.blogspot.com/-2r66SaQmUSw/UglJh8wesyI/AAAAAAAAAHs/zLqTWPEi-iM/s1600/Dress+1.jpg" alt="">
        </img>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>
                    Zara
                </p>
                <p>
                    Casual Women Frock
                </p>
            </div>
            <div className='font-semibold opacity-50'>
            <p className='font-semibold'>
                Rs 2000
            </p>
            <p className='line-through opacity-50'>
                Rs 3500
            </p>
            <p className='text-green-600 font-semibold'>
                40% off
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
