import { IconButton } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const Cartitem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://i.pinimg.com/originals/17/fb/24/17fb24269d12539f5894ad542a8b91a5.jpg" alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'> Women Slim Long Frock</p>
                    <p className='opacity-70'> Size:L,White</p>
                    <p className='opaxity-70 mt-2'>Seller: Azorte</p>
                    <div className='flex space-x-5 item-center text-gray-900 pt-6'>
                        <p className='font-semibold'>
                            $2500
                        </p>
                        <p className='opacity-50 line-through '>

                            $3000
                        </p>
                        <p className='text-green-600 font-semibold '>
                            40%

                        </p>
                    </div>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>           3          </span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}> 
                            <AddCircleOutlineIcon />
                        </IconButton>

                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}} >
                        remove
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cartitem
