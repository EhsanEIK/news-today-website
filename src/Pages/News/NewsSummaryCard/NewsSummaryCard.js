import React from 'react';
import Card from 'react-bootstrap/Card';

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
            <Card.Footer>
                <small className="text-muted">{total_view}</small>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;