import { useState } from "react";
import ListFilmCards from "../components/Cards/ListFilmCards";
import { techFilms } from "../data/techFilms";

function Films() {
    // Estado inicial con películas predefinidas (importadas de techFilms.js)
    const [films, setFilms] = useState(techFilms);

    // Estado para manejar los inputs del formulario de nueva película
    const [newFilm, setNewFilm] = useState({ title: "", text: "" });

    // Esta función se ejecuta cada vez que cambia un input
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza solo el campo modificado del objeto `newFilm`
        setNewFilm({ ...newFilm, [name]: value });
    };

    // Agrega una nueva película a la lista
    const handleAdd = () => {
        // Validación básica (no permitir campos vacíos)
        if (!newFilm.title.trim() || !newFilm.text.trim()) return;

        // Creamos una nueva película con id único usando Date.now()
        const newMovie = {
            id: Date.now(),
            title: newFilm.title,
            text: newFilm.text,
        };

        // Agregamos la nueva película al state films y limpiamos el formulario
        setFilms([...films, newMovie]);
        setNewFilm({ title: "", text: "" });
    };

    // Elimina una película por su id
    const handleDelete = (id) => {
        // Paso 1: Usamos .filter() para recorrer todas las películas
        // y devolver solo las que NO tengan el id que queremos eliminar
        const updatedFilms = films.filter((film) => film.id !== id);

        // Paso 2: Actualizamos el estado con la nueva lista sin esa película
        setFilms(updatedFilms);

        //Podemos hacer los pasos 1 y 2 en una sola línea:
        //setFilms(films.filter((f) => f.id !== id));

    };

    return (
        <div className="container text-center mt-5">
            <h2>Gestión de Películas</h2>

            {/* Formulario para agregar una nueva película */}
            <div className="d-flex justify-content-center gap-2 mb-4">
                <input
                    className="form-control w-25"
                    placeholder="Título"
                    name="title"
                    value={newFilm.title}
                    onChange={handleChange}
                />
                <input
                    className="form-control w-50"
                    placeholder="Descripción"
                    name="text"
                    value={newFilm.text}
                    onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={handleAdd}>
                    Agregar
                </button>
            </div>

            {/* Lista de películas mostradas como tarjetas */}
            <ListFilmCards films={films} onDelete={handleDelete} />
        </div>
    );
}

export default Films;
