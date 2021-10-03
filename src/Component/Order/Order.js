import React, { createElement } from 'react';
import OrderShow from '../OrderShow/OrderShow';
import './Order.css'
const Order = (props) => {

    console.log(props);
    const treesdata = props.treesdata;
    const treesname = props.treesname;
 const i=0;
 
    return (
        treesdata.map((trees)=>{
           
          
               console.log( React.createElement("p", `<h1>deeee</h1>`))
              
            
        }),
        treesname.map((tre)=>{
            console.log(tre);
          
        })
      
    );
};

export default Order;