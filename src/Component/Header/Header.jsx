import React from 'react';
import style from  "./Header.module.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import Motion from "../../Component/Motion/Motion";

// import logo from "../../../public/pictures/logofood.png";
const Header = () => {
  return (
  <motion.main initial={{y:-100}}   whileInView={{y: 0 }}
  transition={{ ease: "easeOut", duration: 1,
  staggerChildren: .2 }}>
    <Navbar expand="lg" className={`bg-body-tertiary ${style.navStyle}`}
      >
    
      <Container > 
      
        <Navbar.Brand href="#home">
          <img src="logofood.png" className ={style.logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Motion>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${style.navLinks}`}
          
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Explore Food</Nav.Link>
            <Nav.Link href="#">Review</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
           <Button name="1800 789 123"/>
          
          </Nav>
        </Navbar.Collapse>  </Motion>
      
      </Container>
    
    </Navbar>
    </motion.main>
  );
}

export default Header;
