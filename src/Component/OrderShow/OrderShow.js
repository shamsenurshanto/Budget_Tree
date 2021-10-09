import React, { useState } from 'react';
import Sumcal from '../Sumcal/Sumcal';
import Treecart from '../Treecart/Treecart';
import './OrderShow.css'

const OrderShow = (props) => {
    console.log( props);
   const treesdata = props.treesdata;
  var sum=0;
    return (
        <div className="row">
            
       

         <div >
                {
                    treesdata.map((tre)=>
                    
                       <Treecart tre={tre}></Treecart>
                       
                    )
                }
         </div>
        
        </div>
    );
};

export default OrderShow;