import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Comonents/Navbar";
import { Home } from "../pages/Home";
import { Peliculas } from "../pages/Peliculas";
import { DetallePeliculas } from "../pages/DetallePeliculas";
import { Creador } from "../pages/Creador";
import { Footer } from "../Comonents/Footer";

export const AppRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route
          path="/detallePeliculas/:nombre"
          element={<DetallePeliculas />}
        />
        <Route path="/creador" element={<Creador />} />
        <Route path="*" element={<h1> Not Found </h1>} />
      </Routes>
      <Footer />
    </div>
  );
};
