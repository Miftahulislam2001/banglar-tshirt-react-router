import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt, handleAddToCard}) => {
    console.log(tshirt);
    const {picture, name, price} = tshirt;
    return (
        <div  className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>$ {price}</p>
            <button onClick={()=>handleAddToCard(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;