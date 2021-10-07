import React, { useState } from 'react';
import Treecart from '../Treecart/Treecart';
import './OrderShow.css'

const OrderShow = (props) => {
    console.log( props);
   const treesdata = props.treesdata;
   const treesname = props.treesname;
    return (
        <div className="row">
         <div className="col-lg-6">
                {
                    treesname.map((tre)=>
                        <p>{tre}</p>
                    )
                }
         </div>

         <div className="col-lg-6">
                {
                    treesdata.map((tre)=>
                        <p>{tre}</p>
                    )
                }
         </div>
        
        </div>
    );
};

export default OrderShow;