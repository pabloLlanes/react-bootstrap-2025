import { useState, useEffect } from "react";
import SpinnerComponent from "./Spinner";
import { countries } from "../data/countries";

function FakeApiCallComponent() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulamos la llamada a un API para obtener los datos
        // una API que tardaria 8 segundos en responder (paciencia xd)
        setTimeout(() => {
            setData(countries);
        }, 8000);
    }, []);

    //si data es null, mostramos un mensaje de carga (spinner)
    if (!data) {
        return (
            <div className="text-center my-4">
                <h5>Loading countries...</h5>
                <SpinnerComponent />
            </div>
        );
    }

    // sino mostramos la lista de paises que nos devolvio la API

    return (
        <div className="mt-4">
            <h3>Paises y año de independencia:</h3>
            <ul className="list-group">
                {data.map((country) => (
                    <li key={country.id} className="list-group-item">
                        {country.name} - Año: {country.founded}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FakeApiCallComponent;
