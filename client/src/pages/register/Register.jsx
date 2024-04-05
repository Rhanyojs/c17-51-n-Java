// Register.jsx
import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-title">Registro</h2>
      <form className="register-form">
        <div className="register-input-container">
          <label htmlFor="username" className="register-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="register-input"
            id="username"
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div className="register-input-container">
          <label htmlFor="email" className="register-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="register-input"
            id="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="register-input-container">
          <label htmlFor="password" className="register-label">
            Contraseña
          </label>
          <input
            type="password"
            className="register-input"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="register-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
