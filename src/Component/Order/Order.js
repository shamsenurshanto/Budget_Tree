import React, { createElement, useState } from 'react';
import OrderShow from '../OrderShow/OrderShow';
import Treecart from '../Treecart/Treecart';
import './Order.css'
const Order = (props) => {

    console.log(props);
    const treesdata = props.treesdata;
    const treesname = props.treesname;
    console.log(treesname);
    
    const poss = new Object();
  const [treeObj,settreeObj] = useState([])
  var newtreeObj =[];
  
    return (

      <div className="">
            
           
            
        
     
       <OrderShow treesname={treesname} treesdata={treesdata}></OrderShow>
      </div>
    )

};

export default Order;