import { useState } from "react";
import { NavLink } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

function NavBar({ globalCount }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleNavbarStyle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navStyle = isDarkMode
        ? { bg: "dark", theme: "dark", buttonVariant: "outline-light" }
        : { bg: "light", theme: "light", buttonVariant: "outline-dark" };

    return (
        <Navbar bg={navStyle.bg} data-bs-theme={navStyle.theme} expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    React
                </Navbar.Brand>

                <span className={`${isDarkMode ? "text-white border-white" : "text-black border-black"} border border-1 rounded p-2`}>
                    Contador Global: {globalCount}
                </span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About Me
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/films">
                            Films
                        </Nav.Link>
                    </Nav>

                    <Button variant={navStyle.buttonVariant} onClick={toggleNavbarStyle}>
                        Change Style
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;