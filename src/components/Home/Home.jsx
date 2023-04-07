import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt/Tshirt';
import Card from '../Card/Card';
import toast from 'react-hot-toast';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [card, setCard] = useState([])

    const handleAddToCard  = tshirt => {
        const exists = card.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('This T-shirt Already added !!!');

        }
        else{
            const newCard = [...card, tshirt]
            setCard(newCard)
        }
  
    }

    const handleRemoveCard = id =>{
        const remain = card.filter(ts => ts._id !== id);
        setCard(remain)
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
            {
                tShirts.map(tshirt => <Tshirt
                
                tshirt = {tshirt}
                handleAddToCard = {handleAddToCard}
                ></Tshirt>)
            }
            </div>
            <div className="card-container">
                <Card card = {card}
                handleRemoveCard = {handleRemoveCard}
                ></Card>
            </div>
        </div>
    );
};

export default Home;