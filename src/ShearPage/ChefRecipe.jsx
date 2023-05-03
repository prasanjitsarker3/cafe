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
                    <Row className='text-center border m-2 d-flex justify-content-between'>
                        <Col lg={6} xs={12} className='p-2 '>
                            <img src={image} alt="" height={'200px'} width={'380px'} srcset="" />
                        </Col>
                        <Col lg={6} xs={12} className='p-2 '>
                            <h1 className='fs-3 text-success'>{name}</h1>
                            <p className='fw-bold'>Recipe Name: {chef.authorRecipe[1].name}</p>

                            <div>
                                <p>{years}  Years Of Experience</p>
                                <p>{like} People Like Recipe</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <p className='fs-wrap text-center py-2'>{experience}</p>
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