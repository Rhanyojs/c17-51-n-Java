import { Route, Routes } from "react-router-dom";
import Home from "@pages/home/Home";
import Register from "@pages/register/Register";
import Navbar from "@/components/Navbar";
import Login from "@pages/login/Login";
import Mascotas from "@/components/Mascotas/Mascotas";
import Contacto from "@/pages/contacto/Contacto";
import Nosotros from "@/pages/nosotros/Nosotros";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Mascotas />} path="/Mascotas" />
        <Route element={<Contacto />} path="/Contacto" />
        <Route element={<Nosotros />} path="/Nosotros" />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
