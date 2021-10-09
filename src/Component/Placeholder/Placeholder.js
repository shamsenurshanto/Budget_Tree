import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Showtree from '../Showtree/Showtree';
import Sumcal from '../Sumcal/Sumcal';
import './Placeholder.css'
const Placeholder = () => {
const [trees,setTrees] = useState([]);
const [treesdata,settreesdata] = useState([]);
const [treesname,settreesname] = useState([]);
const [treesimage,settreesimage] = useState([]);
var sum=0;
 const clickhandle = (props)=>{
  const {price,name,img}=props.tree
  // console.log(props.tree)
 
  

   const newtree = [...treesdata,props.tree];
   settreesdata(newtree);
  //  console.log(price);
   const id = document.getElementById('order_id');
    var sp=parseFloat(id.innerText);
   
    
    sp+=price;
   
    console.log(sp.toFixed(2),id.innerText,price);
    sp=sp.toFixed(2);
    id.innerText=sp.toString();
     

   


  
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
                 
                 
                <div >
                   <h2>Total Cost : $ <span id="order_id">0</span> </h2>
                       
                    <Order treesdata={treesdata} ></Order>
                  
                </div>


               </div>


                 


             </div>
             

            
         

       
    );
};

export default Placeholder;