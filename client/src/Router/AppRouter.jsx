import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/Home"></Route>
        <Route element={<Register />} path="/Register"></Route>
        <Route element={<Login />} path="/Login"></Route>
      </Routes>
    </>
  );
}
