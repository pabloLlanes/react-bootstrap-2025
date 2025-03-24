import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <Container className="text-center">
                © {new Date().getFullYear()} Mi React App — Todos los derechos reservados
            </Container>
        </footer>
    );
}

export default Footer;
