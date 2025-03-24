// src/components/ButtonComponent.jsx
import { Button } from "react-bootstrap";

function ButtonComponent({ text, onClick }) {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
}

export default ButtonComponent;
