import React from 'react';
import './Showtree.css'
const Showtree = (props) => {
    const {name , img , intro } = props.tree;
    console.log(props)
    return (
        <div className="showtreesClass col-lg-4">
               <p>this is {name}</p>
                <img src={img}></img>
                <p>{intro}</p>
                
           
        </div>
    );
};

export default Showtree;