import React, { createElement, useState } from 'react';
import OrderShow from '../OrderShow/OrderShow';
import Treecart from '../Treecart/Treecart';
import './Order.css'
const Order = (props) => {

    console.log(props);
    const treesdata = props.treesdata;
   
    console.log(treesdata);
    
   
  
    return (

      <div className="">
            
           
            
        
     
       <OrderShow treesdata={treesdata} key="e"></OrderShow>
      </div>
    )

};

export default Order;