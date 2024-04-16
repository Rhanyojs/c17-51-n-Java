import React from "react";
import "../contacto/Contacto.scss";

const Contacto = () => {
    return(
        <div className="contacto-container">
            <h2 className="contacto-title">Formulario de Contacto</h2>
            <form className="contacto-formulario">
            <div >
            <label htmlFor="username" className="contacto-label">
            Nombre de usuario
            </label> 
            <input
            type="text"
            className="contacto-input"
            id="username"
            placeholder="Ingresa tu nombre de usuario"
            />
            </div>
            <div className="register-input-container">
            <label htmlFor="email" className="contacto-label">
            Correo electrónico
            </label>
            <input
            type="emailu"
            className="contacto-input"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            />
         </div>
         <div className="register-input-container">
          <label htmlFor="password" className="contacto-label">
            Telefono
          </label>
          <input
            type="password"
            className="contacto-input"
            id="password"
            placeholder="Ingresa tu número de celular"
          />
        </div>
        <button type="submit" className="contacto-button">
          Registrarse
        </button>
        </form>

        </div>
    )
}
export default Contacto;