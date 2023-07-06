// initialy download npm use cart react
// first page
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router";
import Cart from "./Cart";
import Navbar  from './Navbar';
// after onclick button card provide import
import {CartProvider} from "react-use-cart";

function App() {


  return (
    <div>
      <CartProvider>
        {/* provider used to access home and car */}
         {/* <Navbar /> 
         <Home />
         <Cart />  */}
         <Router/>
      </CartProvider>
    </div>
  );
}

export default App;
