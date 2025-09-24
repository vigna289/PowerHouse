import React from 'react'
import Footer from '../customer/components/Footer/Footer';
import Navigation from '../customer/components/Navigation/Navigation';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import OrderDetails from '../customer/components/Order/OrderDetails';
import Order from '../customer/components/Order/Order';
import PaymentSuccess from '../customer/components/Payment.jsx/PaymentSuccess'; 

const CustomerRoutes = () => {
  return (
    <div>
        <div>
 <Navigation/>
        </div>
      <Routes>
<Route path='/login' element={<HomePage/>}></Route>
<Route path='/register' element={<HomePage/>}></Route>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
<Route path='/product/:productId' element={<ProductDetails/>}></Route>
<Route path='/checkout' element={<Checkout/>}></Route>
<Route path='/account/order' element={<Order/>}></Route>
<Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
<Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
 

        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
