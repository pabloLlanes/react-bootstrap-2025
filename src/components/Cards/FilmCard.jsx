import { Card, Button } from "react-bootstrap";

function FilmCard({ id, title, text, onDelete }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="danger" onClick={() => onDelete(id)}>
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    );
}

export default FilmCard;
