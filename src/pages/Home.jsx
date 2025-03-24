// src/pages/Home.jsx
import { useState, useEffect } from "react";
import FakeApiCallComponent from "../components/FakeApiComponent";
import IncrementGlobalCount from "../components/IncrementGlobalCount";

function Home({ globalCount, incrementCount }) {
    const [localMessage, setLocalMessage] = useState("Cargando mensaje...");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLocalMessage("¡Bienvenido al Home!");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container text-center mt-4">
            <h1>Página de Home</h1>
            <p>{localMessage}</p>

            <div className="mt-3">
                <h4>Contador Global: {globalCount}</h4>
                <IncrementGlobalCount incrementCount={incrementCount} />
            </div>

            <hr />

            <FakeApiCallComponent />
        </div>
    );
}

export default Home;
