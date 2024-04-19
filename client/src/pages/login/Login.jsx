import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },

    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await Swal.fire({
      icon: "success",
      title: "¡Iniciar sesión exitoso!",
      text: "Has iniciado sesión  correctamente.",
    });
    reset();
  };
  return (
    <div className="login-container">
      <h2 className="register-title">Iniciar sesión</h2>
      <div className="container-login-icon">
        <FaUser className="login-icon" />
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-input-container">
          <label htmlFor="email" className="login-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="login-input"
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
              <span className="login-span">{errors.correo.message}</span>
            )}
        </div>
        <div className="login-input-container">
          <label htmlFor="password" className="login-label">
            Contraseña
          </label>
          <input
            type="password"
            className="login-input"
            placeholder="Ingresa tu contraseña"
            {...register("contraseña", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe ser mayor a 6 caracteres",
              },
              maxLength: {
                value: 16,
                message: "La contraseña debe ser menor a 16 caracteres",
              },
            })}
          />
          {errors.contraseña &&
            (touchedFields.contraseña ||
              errors.contraseña.type === "required") && (
              <span className="login-span">{errors.contraseña.message}</span>
            )}
        </div>
        <div className="login-remember">
          <div className="login-checkbox-container">
            <input type="checkbox" />
            <p>recordar contraseña</p>
          </div>
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
        <div className="forgot-password-container">
          <p>Has olvidado tu contraseña?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
