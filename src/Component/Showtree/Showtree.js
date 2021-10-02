import React from 'react';
import './Showtree.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCartPlus} />


const Showtree = (props) => {
    const {name , img , intro , price ,starCount,shipment } = props.tree;
    console.log(props)
    return (
        <div className="showtreesClass col-lg-4">
               <p>this is {name}</p>
                <img src={img}></img>
                <p>{intro}</p>
                <h5>Price : {price}</h5>
                <h5>Star Count : {starCount}</h5>
                <button className="btn btn btn-outline-success" > {element} click to ADD </button>
                
                
           
        </div>
    );
};

export default Showtree;