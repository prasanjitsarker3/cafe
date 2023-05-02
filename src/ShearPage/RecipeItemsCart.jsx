import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeItemsCart = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { name, image, experience, numberRecipe, like, view, years, id, method, rating, leastRecipe } = recipe;
    const handleClick = () => {
        toast.success("Hello")
        setFavorite(true)
    }
    return (
        <div className='col col-md-4 col-12 mx-auto'>
            <Card style={{ width: '18rem' }} className='mx-auto border border-light shadow-sm  bg-body-tertiary rounded'>
                <Card.Img variant="top" src={image} height={'200px'} />
                <Card.Body>
                    <Card.Title className='text-center fs-3 '>{name}</Card.Title>
                    <Card.Text>
                        {method.slice(0, 118)}...
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                        {/* <Button onClick={handleClick}>Toast</Button> */}
                        <Button disable={!favorite} onClick={handleClick}>
                            <p>FAV</p>
                        </Button>
                        {/* <p style={{ fontSize: '30px' }}><FaHeart disable={favorite} /></p> */}

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeItemsCart;