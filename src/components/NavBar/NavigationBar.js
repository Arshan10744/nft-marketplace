import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavigationBar.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Private from '../../Private';


const NavigationBar = () => {
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("jwt");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='heading-gradient nav-logo'>THE NFT PLACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='heading-gradient nav-content' onClick={()=>navigate("/allNft")}>ALL NFTs</Nav.Link>
            <Nav.Link className='heading-gradient nav-content' onClick={()=>navigate("/About")} >About</Nav.Link>
            <NavDropdown className='nav-content heading-gradient' title="My NFTs" id="collasible-nav-dropdown">
              <NavDropdown.Item className='dropDown-elements heading-gradient' onClick={()=>navigate("/SellNFT")}>Sell</NavDropdown.Item>
              <NavDropdown.Item className='dropDown-elements heading-gradient' onClick={()=>navigate("/myNfts")}>My NFTs</NavDropdown.Item>
            
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='heading-gradient nav-content' onClick={()=>navigate("/Contact")}>Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='heading-gradient nav-content'>
              Arshan
            </Nav.Link>
            Private<Link className='heading-gradient nav-content logout'  onClick={()=>logout()} to={"/login"} >Log Out</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar