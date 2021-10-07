import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Showtree from '../Showtree/Showtree';
import './Placeholder.css'
const Placeholder = () => {
const [trees,setTrees] = useState([]);
const [treesdata,settreesdata] = useState([]);
const [treesname,settreesname] = useState([]);

 const clickhandle = (props)=>{
  const {price,name}=props.tree

   const newtree = [...treesdata,price];
   settreesdata(newtree);
   console.log(newtree);

   const newtreename = [...treesname,name];
   settreesname(newtreename);
   console.log(newtreename);
   
  
 }
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
                          <Showtree key={tree.key} tree={tree} clickhandle={clickhandle}   ></Showtree>
                    )
                }
                    </div>
               </div>


               <div className="col-lg-3">
                 
                 
                <div id="order_id">
                        <h1>ksjdks</h1>
                    <Order treesdata={treesdata} treesname={treesname}></Order>
                  
                </div>


               </div>


                 


             </div>
             

            
         

       
    );
};

export default Placeholder;