import React from 'react';
import './Showtree.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCartPlus} />


const Showtree = (props) => {
    const {name , img , intro , price ,starCount,shipment } = props.tree;
   // console.log(props.name , props )
    return (
        <div className="showtreesClass col-lg-4">
              
                <img src={img}></img>
                <p className="pname mt-3"> {name}</p>
                <p className="">{intro}</p>
                <h5 className="pname">Price : $ {price}</h5>
                <h5 className="pname">Star Count : {starCount}</h5>
                <h6 className="pname"> <small> {shipment}</small> </h6>

                <button onClick={()=>props.clickhandle(props)} className="btn btn btn-outline-success" > {element} Click to ADD </button>
                
             
           
        </div>
    );
};

export default Showtree;