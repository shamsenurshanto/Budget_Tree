import React from 'react';
import './Treecart.css';

const Treecart = (props) => {
    console.log(props)
    const {name,price,img}=props.tre
    return (
        <div className="col-lg-10  m-3 carttree">
          
         <div className="d-flex justify-content-start ">
              <img className="me-3 ms-2 mt-2" src={props.tre.img}></img>
             <div>
             <p >price: ${price}</p>
             <p className="m-0 p-0">name: {name}</p>
             </div>
         </div>
        
         
        </div>
        
    )
};


export default Treecart;