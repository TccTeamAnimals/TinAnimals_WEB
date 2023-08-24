import logo from '../../imgs/logo.jpg';
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'; // Importando o componente Dropdown

export function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className={styles.logoLink} >
                    <img className={styles.img} src={logo} alt="TinAnimalsLogo" />
                    <Navbar.Brand className={styles.marginLogo}>TinAnimals</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {/* Substitua o Nav.Link por um Dropdown */}
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="cadastro-dropdown">
                                Cadastrar
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={`${styles.customDropdownMenu} bg-dark`}> 
                                <style>
                                    {`
                                        .${styles.customDropdownMenu} .dropdown-item:hover {
                                            background-color: var(--gray-800); 
                                        }
                                    `}
                                </style>
                                <Dropdown.Item href="/cadUser" style={{ color: 'white' }}>
                                    Usuário
                                </Dropdown.Item>
                                <Dropdown.Item href="/cadOng" style={{ color: 'white' }}>
                                    ONG
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}