import { useState } from "react";
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Films from "./pages/Films";
import Footer from "./components/Footer";

function App() {
  const [globalCount, setGlobalCount] = useState(0);

  const incrementCount = () => {
    setGlobalCount(prevCount => prevCount + 1);
  };

  return (
    // contenedor principal con flexbox y min height
    <div className="d-flex flex-column min-vh-100">
      <NavBar globalCount={globalCount} />

      {/* Este bloque crece y empuja el footer hacia abajo */}
      <div className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                globalCount={globalCount}
                incrementCount={incrementCount}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                globalCount={globalCount}
                incrementCount={incrementCount}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/films" element={<Films />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
