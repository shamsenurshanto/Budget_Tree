import React from 'react';

const Treecart = (props) => {
    console.log(props)
    return (
        <div className="col-lg-1">
          
            <p>{props.price}</p>
        </div>
    );
};

export default Treecart;