import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;

    return (
        <div>
            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Show all news of this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;