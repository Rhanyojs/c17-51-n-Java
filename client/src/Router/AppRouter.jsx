import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Navbar from "@/components/Navbar";
import Pets from "@/pages/pets/Pets";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Pets />} path="/Pets" />
      </Routes>
    </>
  );
}
