import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypeContext } from '../../../App';
import './NavbarHome.css';

const NavbarHome = () => {
    const [type, setType] = useContext(TypeContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" className="style-nav">
                <Container>
                <Navbar.Brand className="text-white" href="/home">EasyHousing</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                              <Link to="/home" onClick={()=>setType('buy')} className="linkStyle">Buy</Link>
                              <Link to="/home" onClick={()=>setType('rent')} className="linkStyle">Rent</Link>
                              <Link to="/home" onClick={()=>setType('bachelor')} className="linkStyle">Bachelor</Link>
                    <Link to="/userpanel" className="linkStyle">User-Panel</Link>
                    <Link to="/contactauth" className="linkStyle">Contact</Link>
                    <Link to="/career" className="linkStyle">Career</Link>
                    </Nav>
                    <Nav>
                    {localStorage.getItem('user')?<div className="linkStyle">{localStorage.getItem('user')}</div>:<Link to="/login"className="linkStyle">Login</Link>}
                    {localStorage.getItem('user')?<Link to="/" className="linkStyle" onClick={()=>{localStorage.clear(); window.location.reload()}}>Logout</Link>:<Link to="/signup" className="linkStyle">SignUp</Link>}
                    <Link to="/admin" className="linkStyle">Admin</Link>
                   
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavbarHome;