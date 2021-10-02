import React, { useEffect, useState } from 'react';
import Showtree from '../Showtree/Showtree';
import './Placeholder.css'
const Placeholder = () => {
   
const [trees,setTrees] = useState([]);

useEffect(()=>{
    fetch('../products.JSON').
    then(res=>res.json()).
    then(data=>{
     setTrees(data); // data have been seted 
    })
   },[]);
    return (
        
            
             <div className="row">
             
               
               <div className='col-lg-9 placeholderclass text-center'>
                    <div className='row'>
                    {
                    trees.map((tree)=>
                          <Showtree key={tree.key} tree={tree} ></Showtree>
                    )
                }
                    </div>
               </div>

             </div>
             

            
         

       
    );
};

export default Placeholder;