import React from "react";
import { useForm } from "react-hook-form";
import "./FormUser.scss";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FormUser() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await Swal.fire({
      icon: "success",
      title: "Formulario enviado!",
      text: "En breve nos vamos a contactar con vos para contarte como sigue la adopción.",
    });
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/Home");
  };
  return (
    <>
      <div className="FormUser-container">
        <form className="FormUser-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="FormUser-input-container">
            <label htmlFor="username" className="FormUser-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="FormUser-input"
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
                <span className="FormUser-span">{errors.nombre.message}</span>
              )}
          </div>
          <div className="FormUser-input-container">
            <label htmlFor="password" className="FormUser-label">
              Telefono
            </label>
            <input
              type="text"
              className="FormUser-input"
              placeholder="Ingresa tu número de celular"
              {...register("telefono", {
                required: "El teléfono es requerido",
                pattern: {
                  value: /^\d{10}$/,
                  message: "El teléfono debe tener 10 dígitos numéricos",
                },
              })}
            />
            {errors.telefono &&
              (touchedFields.telefono ||
                errors.telefono.type === "required") && (
                <span className="FormUser-span">{errors.telefono.message}</span>
              )}
          </div>
          <div className="FormUser-input-container">
            <label htmlFor="email" className="FormUser-label">
              Correo electrónico
            </label>
            <input
              type="text"
              className="FormUser-input"
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
                <span className="FormUser-span">{errors.correo.message}</span>
              )}
          </div>
          <div className="FormUser-input-container">
            <label htmlFor="username" className="FormUser-label">
              Localidad
            </label>
            <input
              type="text"
              className="FormUser-input"
              placeholder="Ingresa tu Localidad"
              {...register("localidad", {
                required: "la Localidad es requerido",
              })}
            />
            {errors.localidad &&
              (touchedFields.localidad ||
                errors.localidad.type === "required") && (
                <span className="FormUser-span">
                  {errors.localidad.message}
                </span>
              )}
          </div>
          <div className="FormUser-input-container">
            <label htmlFor="note" className="FormUser-label">
              Elegiste una mascota, ¿Cuál?
            </label>
            <textarea
              className="FormUser-input"
              placeholder="Agrega una nota"
              {...register("nota")}
            />
          </div>
          <div className="FormUser-checkbox-container">
            <label htmlFor="checkbox" className="checkbox-label">
              Tenés o tuviste otras mascotas
            </label>
            <div className="container-checkboxs">
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">Si</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">No</label>
              </div>
            </div>
          </div>
          <div className="FormUser-checkbox-container">
            <label htmlFor="checkbox" className="checkbox-label">
              Vivís en
            </label>
            <div className="container-checkboxs">
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">Departamento</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">Casa</label>
              </div>
            </div>
            <div className="container-checkboxs">
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">Propietario</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="FormUser-checkbox"
                  {...register("terminosYCondiciones", { required: true })}
                />
                <label className="checkbox-label">Alquilas</label>
              </div>
            </div>
          </div>

          <div className="FormUser-input-container">
            <label htmlFor="checkbox" className="FormUser-label">
              Acepto los términos y condiciones
            </label>

            <input
              type="checkbox"
              className="FormUser-checkbox-terminos"
              {...register("terminosYCondiciones", { required: true })}
            />
          </div>

          <button type="submit" className="FormUser-button">
            Listo
          </button>
        </form>
      </div>
    </>
  );
}

export default FormUser;
