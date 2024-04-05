import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="register-title">Iniciar sesión</h2>
      <form className="login-form">
        <div className="login-input-container">
          <label htmlFor="email" className="login-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="login-input"
            id="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password" className="login-label">
            Contraseña
          </label>
          <input
            type="password"
            className="login-input"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
