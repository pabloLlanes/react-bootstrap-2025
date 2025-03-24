import { useState } from "react";
import FormComponent from "../components/FormComponent";

function Login() {
    // Usuario hardcodeado
    const defaultUser = {
        email: "pepito@email.com",
        password: "123456",
        name: "Pepito",
    };

    // Estado para controlar si se logueó correctamente
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para validar login
    const handleLogin = (email, password) => {
        if (email === defaultUser.email && password === defaultUser.password) {
            setIsLoggedIn(true);
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="container text-center mt-5">
            {isLoggedIn ? null : <>

                <h1>Welcome</h1>
                <p>email: pepito@email.com | password: 123456</p>
            </>}

            {/* Si está logueado, mostrar bienvenida. Si no, el form */}
            {isLoggedIn ? (
                <div className="mt-4">
                    <h2>Welcome, {defaultUser.name}!</h2>
                    <p>Has iniciado sesión correctamente 🎉</p>


                    <button
                        className="btn btn-outline-danger mt-5"
                        onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            ) : (
                <FormComponent onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Login;
