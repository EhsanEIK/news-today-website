import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <Button variant="outline-primary mb-2 w-100">
                <FaGoogle /> Login via Google</Button>
            <Button variant="outline-dark mb-2 w-100">
                <FaGithub /> Login via Github</Button>
            <p className='h5 mt-3 mb-1'>Find us on</p>
            <ListGroup>
                <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaInstagram /> Instagram</ListGroup.Item>
            </ListGroup>
            <p className='h4 fw-bold mt-4 mb-2'>Brand Partners</p>
            <BrandCarousel></BrandCarousel>
        </div >
    );
};

export default RightSideNav;