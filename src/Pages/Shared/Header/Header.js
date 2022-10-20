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

                        <Nav.Link><Link to='/' className='text-decoration-none text-dark'>Home</Link></Nav.Link>

                        <Nav.Link href="#link">News</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className='me-3'>Log Out</button>
                                : <>
                                    <Nav.Link>
                                        <Link to='/login'>Login</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to='/register'>Register</Link>
                                    </Nav.Link>
                                </>
                        }
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link>{user?.displayName ? user.displayName : ''}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL
                                ?
                                <Image src={user.photoURL} roundedCircle style={{ height: '30px' }}></Image>
                                :
                                <FaUserAlt />}
                        </Nav.Link>
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