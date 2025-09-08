import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import {Box} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className=' px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='spaxe-y-5' container>
            {[1,1,1,1,1,1].map((item)=>
            <Grid item container className='shadow-xl rounded-md p-5 border ' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://ae01.alicdn.com/kf/HTB15ToZRVXXXXa9XVXXq6xXFXXXs/NAVIFORCE-Mens-Watches-Top-Brand-Luxury-Sport-Quartz-Watch-Leather-Strap-Clock-Men-Waterproof-Wristwatch-relogio.jpg" alt=""/>
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>NAVIFORCE Mens Watches Top Brand Luxury Sport Quartz-Watch</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span> Color: Black</span><span>Size: Free-Size</span> </p>
                            <p>Rolex</p>
                            <p>$8000</p>
                        </div>
                    </div>
                </Grid>
                <Grid item >
<Box sx={{color:deepPurple[500]}}>
    <StarBorderIcon sx={{fontSize:"2rem"}}  className='px-2 '/>
    <span>
        Rate and Review Product
    </span>


</Box>
                </Grid>
            </Grid>)}

        </Grid>
    </div>
  )
}

export default OrderDetails
