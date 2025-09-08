import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate=useNavigate();
    return (
        <div  onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl '>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6} >
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/629663/46/mod01/fnd/IND/fmt/png/WARDROBE-Essentials-Men's-Seersucker-Relaxed-Fit-Shirt" alt="" />

                        <div className='ml-5 space-y-2'>
                            <p className=''>WARDROBE Essentials Men's Seersucker Relaxed Fit Shirt</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>
                        </div>
                    </div>
                </Grid>
                <Grid item className='ml-20' xs={2}>
                    <p>$500</p>

                </Grid>
                <Grid item className='ml-20' xs={4}>
                    {true && <div>
                     <p>
                        <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                        <span> Expected Delivery on Oct 23</span>
                    </p> 
                    <p className='text-xs'>
                        Your item has been delivered.
                    </p>
                    </div> }
                        
                    {false && <p>
                        <span>
                            Expected Delivery on Oct 23
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
