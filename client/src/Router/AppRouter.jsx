import { Route, Routes } from "react-router-dom";
import Home from "@pages/home/Home";
import Register from "@pages/register/Register";
import Navbar from "@/components/Navbar";
import Login from "@pages/login/Login";
import Mascotas from "@/components/Mascotas/Mascotas";
import PetInformation from "@/components/petInformation/PetInformation";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Mascotas />} path="/Mascotas" />
        <Route element={<PetInformation />} path="/PetInformation" />
      </Routes>
    </>
  );
}
