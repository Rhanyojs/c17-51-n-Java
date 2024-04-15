import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

        <div className="register-input-container">
          <label htmlFor="options" className="register-label">
            Selecciona un tipo de usuario
          </label>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="register-input"
            id="options"
          >
            <option value="">Selecciona...</option>
            <option value="opcion1">Persona</option>
            <option value="opcion2">Refugio</option>
            <option value="opcion3">Administrador</option>
          </select>
        </div>

        <button type="submit" className="register-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
