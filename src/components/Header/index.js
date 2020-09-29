import React from 'react';
import { Navbar } from 'rbx';
import Logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

import './styles.css';

function Header(){
  return (
    <Navbar >
    <Navbar.Brand>
      <Navbar.Item>
        <Link to='/'>
      <img
          src={Logo}
          alt="Victor Hugo Fuly"
          width="112"
          height="28"
        />
        </Link>
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start">
      <Link to='/'><Navbar.Item>Sobre</Navbar.Item></ Link>
      <Link to='/projects'> <Navbar.Item>Projetos</Navbar.Item></ Link>
      <Link to='/contact'> <Navbar.Item>Contato</Navbar.Item></ Link>
      </Navbar.Segment>
    </Navbar.Menu>
  </Navbar>

  )
}

export default Header;