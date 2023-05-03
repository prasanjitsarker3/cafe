import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight, FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const CheifCard = ({ restau }) => {
    const { name, image, experience, numberRecipe, like, view, years, id } = restau;
    return (
        <div className='col col-md-4 col-12 mx-auto'>

            <Card style={{ width: '18rem' }} className='mx-auto border border-light shadow-sm  bg-body-tertiary rounded'>
                <LazyLoad height={200} width={286} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <Card.Img variant="top" src={image} height={'200px'} /> 
                </LazyLoad>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>{years} Years Of Experience</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p>Recipes Items:{numberRecipe}</p>
                        <p><FaHandPointRight />  {like}</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link to={`/chef/${id}`}> <Button variant="success">View Recipes <FaArrowRight /></Button></Link>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CheifCard;