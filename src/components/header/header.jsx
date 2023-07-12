import logo from '../../imgs/logo.jpg';
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className={styles.logoLink} >
                <img  className={styles.img} src={ logo } alt="TinAnimalsLogo" />
                <Navbar.Brand className={styles.marginLogo}>TinAnimals</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/">Contato</Nav.Link> */}
                    {/* <Nav.Link href="/animalsLiked">Sobre</Nav.Link> */}
                    {/* <Nav.Link href="/profileUser">Meu Perfil</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="/cadastros">Cadastrar</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}