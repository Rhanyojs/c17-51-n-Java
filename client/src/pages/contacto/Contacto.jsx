import React from "react";
import "../contacto/Contacto.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaUserPlus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
// Importamos el icono FaUserPlus desde la librería react-icons/fa

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await Swal.fire({
      icon: "success",
      title: "Formulario exitoso!",
      text: "Tu formulario ha sido enviado correctamente.",
    });
    reset();
  };
  return (
    <div className="contacto-container">
      <div className="contact-right">
        <div className="container-information-map">
          <IoLocationSharp className="map-icon" />
          <h1 className="map-title">location</h1>
        </div>
        <div className="container-map">
          <div className="map">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: "350px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="contact-left">
        <h2 className="register-title">Formulario de contacto</h2>
        <div className="container-contacto-icon">
          <FaUserPlus className="contacto-icon" />
          {/* Utilizamos el componente FaUserPlus para renderizar el icono de
        "Usuario Más" en el componente.
        La clase "contacto-icon" se puede utilizar para aplicar estilos específicos al icono, si es necesario. */}
        </div>
        <form className="contacto-formulario" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="contacto-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="contacto-input"
              placeholder="Ingresa tu nombre de usuario"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 4,
                  message: "El nombre de usuario debe ser mayor a 4 caracteres",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El nombre de usuario debe tener máximo 20 caracteres",
                },
              })}
            />
            {errors.nombre &&
              (touchedFields.nombre || errors.nombre.type === "required") && (
                <span className="contacto-span">{errors.nombre.message}</span>
              )}
          </div>
          <div className="register-input-container">
            <label htmlFor="email" className="contacto-label">
              Correo electrónico
            </label>
            <input
              type="emailu"
              className="contacto-input"
              placeholder="Ingresa tu correo electrónico"
              {...register("correo", {
                required: "El correo es requerido",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message: "El correo no es válido",
                },
              })}
            />
            {errors.correo &&
              (touchedFields.correo || errors.correo.type === "required") && (
                <span className="contacto-span">{errors.correo.message}</span>
              )}
          </div>
          <div className="register-input-container">
            <label htmlFor="password" className="contacto-label">
              Telefono
            </label>
            <input
              type="text"
              className="contacto-input"
              placeholder="Ingresa tu número de celular"
              {...register("telefono", {
                required: "El teléfono es requerido",
                pattern: {
                  value: /^\d{10}$/, // Expresión regular para validar números de teléfono de 10 dígitos
                  message: "El teléfono debe tener 10 dígitos numéricos",
                },
              })}
            />
            {errors.telefono &&
              (touchedFields.telefono ||
                errors.telefono.type === "required") && (
                <span className="contacto-span">{errors.telefono.message}</span>
              )}
          </div>
          <button type="submit" className="contacto-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contacto;
