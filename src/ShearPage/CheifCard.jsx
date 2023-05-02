import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazy-load';


const CheifCard = ({ restau }) => {
    const { name, image, experience, numberRecipe, like, view, years, id } = restau;
    return (
        <div className='col col-md-4 col-12 mx-auto'>
            {/* <LazyLoad height={50} offset={50}> */}
                <Card style={{ width: '18rem' }} className='mx-auto border border-light shadow-sm  bg-body-tertiary rounded'>
                    <Card.Img variant="top" src={image} height={'200px'} />
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
            {/* </LazyLoad> */}
        </div>
    );
};

export default CheifCard;