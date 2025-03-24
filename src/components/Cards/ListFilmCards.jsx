import FilmCard from "./FilmCard";

function ListFilmCards({ films, onDelete }) {
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            {films.map((film) => (
                <FilmCard
                    key={film.id}
                    id={film.id}
                    title={film.title}
                    text={film.text}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ListFilmCards;
