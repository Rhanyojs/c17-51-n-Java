import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Navbar from "@/components/Navbar";

import Details from "@/components/details/Details";
import PetInformation from "@/components/petInformation/PetInformation";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Details />} path="/Details" />
        <Route element={<PetInformation />} path="/PetInformation" />
      </Routes>
    </>
  );
}
