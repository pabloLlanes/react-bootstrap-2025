import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const FruitsPage = () => {
    // Arreglo de frutas
    const fruits = [
        { id: 1, name: 'Manzana' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Naranja' },
        { id: 4, name: 'Pera' },
        { id: 5, name: 'Uva' },
        { id: 6, name: 'Sandía' },
        { id: 7, name: 'Melón' },
        { id: 8, name: 'Fresa' },
    ];

    // Estado para los favoritos
    const [favorites, setFavorites] = useState([]);

    // Cargar favoritos al iniciar
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('fruitFavorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    // Verificar si una fruta está en favoritos
    const isFavorite = (id) => {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].id === id) {
                return true;
            }
        }
        return false;
    };

    // Guardar fruta en favoritos
    const addToFavorites = (fruit) => {
        const updatedFavorites = [...favorites, fruit];
        setFavorites(updatedFavorites);
        localStorage.setItem('fruitFavorites', JSON.stringify(updatedFavorites));
    };

    // Eliminar fruta de favoritos
    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(fruit => fruit.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('fruitFavorites', JSON.stringify(updatedFavorites));
    };

    return (
        <Container className="mt-4">
            <Row>
                {/* Columna principal con las frutas */}
                <Col md={8}>
                    <h2>Todas las Frutas</h2>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {fruits.map((fruit) => {
                            const favorite = isFavorite(fruit.id);
                            return (
                                <Col key={fruit.id}>
                                    <Card className="h-100">
                                        <Card.Body className="d-flex flex-column align-items-center">
                                            <Card.Title>{fruit.name}</Card.Title>
                                            <Button
                                                variant="primary"
                                                onClick={() => addToFavorites(fruit)}
                                                disabled={favorite}
                                            >
                                                {favorite ? 'En favoritos' : 'Agregar'}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>

                {/* Columna de favoritos */}
                <Col md={4}>
                    <h2>Mis Frutas Favoritas</h2>
                    {favorites.length === 0 ? (
                        <p className="text-muted">No tienes frutas favoritas aún</p>
                    ) : (
                        <ListGroup>
                            {favorites.map((fruit) => (
                                <ListGroup.Item key={fruit.id} className="d-flex justify-content-between align-items-center">
                                    {fruit.name}
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => removeFavorite(fruit.id)}
                                    >
                                        ×
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default FruitsPage;