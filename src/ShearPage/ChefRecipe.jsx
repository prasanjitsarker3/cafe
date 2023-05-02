import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeItemsCart from './RecipeItemsCart';

const ChefRecipe = () => {
    const chef = useLoaderData();
    const { name, image, experience, numberRecipe, like, view, years, id } = chef;
    // const authorRecipe = chef;
    return (
        <Container className='mt-5'>

            <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img src={image} alt="" height={'200px'} width={'400px'} srcset="" />
                        <h1 className='fs-3 text-success'>{name}</h1>
                        <p className='fw-bold'>Recipe Name: {chef.authorRecipe[2].name}</p>

                        <div>
                            <p>{years}  Years Of Experience</p>
                            <p>{like} People Like Recipe</p>
                        </div>

                    </div>

                </Col>
                <p className='fs-wrap text-center'>{experience}</p>
            </Row>
            <Row>
                <Col>
                    <h1 className='fs-3 text-success text-center py-5'>Master Chef Other Recipes & Items</h1>

                    <div className='row g-3 mx-auto'>
                        {
                            chef.authorRecipe.map(recipe => <RecipeItemsCart recipe={recipe} key={recipe.id}>

                            </RecipeItemsCart>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ChefRecipe;