import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    console.log(news)
    const { _id, category_id, author, details, image_url, rating, title, total_view } = news
    return (
        <Card className='mb-3'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length > 200 ? details.slice(0, 200) : details}
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