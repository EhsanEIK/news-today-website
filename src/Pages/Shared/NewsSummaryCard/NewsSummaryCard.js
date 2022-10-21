import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, author, details, image_url, rating, title, total_view } = news
    return (
        <Card className='mb-4'>
            <Card.Header as="h5" className="d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <div>
                        <Image src={author.img} alt="" roundedCircle style={{ height: '50px' }}></Image>
                    </div>
                    <div className='ms-2'>
                        <h6 className='m-0'>{author.name}</h6>
                        <small className='text-muted m-0'>{author.published_date}</small>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <FaRegBookmark />
                    <FaShareAlt className='ms-2' />
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 200 ?
                            <>{details.slice(0, 200) + '...'}<Link to={`/news/${_id}`}>Read More</Link></>
                            : details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between text-muted">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning' />
                    <p className='m-0 ms-2'>{rating.number}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye />
                    <p className='m-0 ms-2'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;