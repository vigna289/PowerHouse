import { IconButton } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeItemToCart, updateCartItem } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';
const Cartitem = ({item}) => {
    const dispatch = useDispatch();
    const handleUpdateCartItem = (num) =>{
        const data = {data:{quantity:item.quantity+num},cartItemId:item?._id}
        dispatch(updateCartItem(data))
    }
    const handleRemoveCartItem = () =>{
        dispatch(removeItemToCart(item._id))
    }
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'> {item.product.title}</p>
                    <p className='opacity-70'> Size:{item.size},White</p>
                    <p className='opaxity-70 mt-2'>Seller: {item.product.brand}</p>
                    <div className='flex space-x-5 item-center text-gray-900 pt-6'>
                        <p className='font-semibold'>
                            ${item.price}
                        </p>
                        <p className='opacity-50 line-through '>

                            ${item.product.discountedPrice}
                        </p>
                        <p className='text-green-600 font-semibold '>
                           {item.product.discountPersent}%Off

                        </p>
                    </div>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1) } disabled={item.quantity<=1} sx={{color:"RGB(145 85 253)"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>           {item.quantity}          </span>
                        <IconButton onClick={()=>handleUpdateCartItem(+1)} sx={{color:"RGB(145 85 253)"}}> 
                            <AddCircleOutlineIcon />
                        </IconButton>

                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}} >
                        remove
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cartitem
