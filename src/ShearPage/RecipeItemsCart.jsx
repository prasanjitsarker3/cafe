import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const RecipeItemsCart = ({ recipe }) => {
    const { name, image, experience, numberRecipe, like, view, years, id, method, rating, leastRecipe } = recipe;
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
                        <p style={{ fontSize: '30px' }}><FaHeart /></p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeItemsCart;