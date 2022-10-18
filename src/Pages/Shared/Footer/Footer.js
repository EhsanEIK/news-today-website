import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <footer className='bg-secondary text-light text-center mt-5 py-2'>
                <p className='m-0'><small>&copy; 2022 - Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer" class="text-warning text-decoration-none">Ehsan</a></small></p>
            </footer>
        </Container>
    );
};

export default Footer;