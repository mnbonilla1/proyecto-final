import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [active, setActive] = useState('inicio');

  const handleActive = (option) => {
    setActive(option);
  };

  return (
    <div>
      <Navbar className="fixed-top" style={{ backgroundColor: '#333', padding: '0.1rem'  }}>
       
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%',
        }}>
          <Nav className="d-flex" style={{ flex: 1, justifyContent: 'flex-start',gap:'100px', marginLeft:'50px' }}>
            <NavItem>
              <Link
                to="/"
                className={`mi-enlace ${active === 'inicio' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('inicio')}
              >
                Inicio
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/biografia"
                className={`mi-enlace ${active === 'biografia' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('biografia')}
              >
                Biografia
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/musica"
                className={`mi-enlace ${active === 'musica' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('musica')}
              >
                Musica
              </Link>
            </NavItem>
          </Nav>

          
          <NavbarBrand href="https://www.sabrinacarpenter.com/home/" className="mx-auto">
            <img
              alt="logo"
              src="https://www.sabrinacarpenter.com/files/2024/06/logo-drk.png"
              style={{
                height: 55,
                width: 100,
              }}
            />
          </NavbarBrand>

     
          <Nav className="d-flex" style={{ flex: 1, justifyContent: 'flex-end', gap:'100px', marginRight:'50px' }}>
            <NavItem>
              <Link
                to="/actuacion"
                className={`mi-enlace ${active === 'actuacion' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('actuacion')}
              >
                Actuacion
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/galeria"
                className={`mi-enlace ${active === 'galeria' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('galeria')}
              >
                Galeria
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/contactos"
                className={`mi-enlace ${active === 'contactos' ? 'active' : ''}`}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                onClick={() => handleActive('contactos')}
              >
                Contactos
              </Link>
            </NavItem>
          </Nav>
        </div>

        <Collapse isOpen={isOpen} navbar>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
