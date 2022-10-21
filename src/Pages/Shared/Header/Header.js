import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserAlt } from "react-icons/fa";
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(r => { }).catch(error => console.error(error));
    }

    return (
        <Navbar bg="light" expand="lg" className='mb-3'>
            <Container>
                <Link to='/' className='text-decoration-none'>
                    <Navbar.Brand>NEWS TODAY</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='text-decoration-none text-dark'>Home</Link>
                        <Nav.Link href="#link">News</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className='me-3'>Log Out</button>
                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link>{user?.displayName ? user.displayName : ''}</Nav.Link>
                        <Link to='/profile'>
                            {user?.photoURL
                                ?
                                <Image src={user.photoURL} roundedCircle style={{ height: '30px' }}></Image>
                                :
                                <FaUserAlt />}
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;