import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // Desestructuración de la función useForm() de React Hook Form
  const {
    // Función register() que registra los campos del formulario
    register,
    // Función handleSubmit() que maneja la acción de enviar el formulario
    handleSubmit,
    // Objeto formState que contiene información sobre el estado del formulario, como errores y campos tocados
    formState: {
      // El objeto errors contiene los mensajes de error para cada campo del formulario
      errors,
      // El objeto touchedFields indica qué campos han sido tocados o visitados por el usuario
      touchedFields,
    },

    // Función watch() que observa cambios en los valores de los campos del formulario
    watch,
    // Función reset() que reinicia los valores del formulario
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:8080/auth/register", data);
      // Aquí manejamos la respuesta del servidor tras una solicitud exitosa
      await Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu formulario ha sido enviado correctamente.",
      });
      // Reseteamos el formulario después de mostrar el SweetAlert
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Redirigimos al usuario a otra ruta, por ejemplo al inicio
      navigate("/Home");
    } catch (err) {
      // Manejo de errores si la solicitud falla
      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        text: err.response ? err.response.data.message : "Error desconocido",
      });
      console.log(err);
    }
  };

  return (
    <div className="pet-container">
      <h2 className="pet-title">Registro</h2>

      <form className="pet-form" onSubmit={handleSubmit(onSubmit)}>
        {/* La función handleSubmit de react-hook-form se utiliza para manejar
        el envío del formulario. 
        Recibe como argumento nuestra función
        personalizada onSubmit,que contiene la lógica para enviar el formulario
        y realizar acciones adicionales, como mostrar un mensaje de éxito y
        restablecer el formulario. */}
        <div className="pet-input-container">
          <label htmlFor="username" className="pet-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="pet-input"
            placeholder="Ingresa tu nombre de usuario"
            {...register("username", {
              // ejemplo de validación para el campo "nombre"
              // La propiedad "required" indica que el campo es obligatorio
              required: "El nombre es requerido",

              minLength: {
                value: 4,
                message: "El nombre de usuario debe ser mayor a 4 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre de usuario debe tener máximo 20 caracteres",
              },
            })}
          />
          {errors.username &&
            // errors.nombre: Esto verifica si hay un error asociado al campo "nombre".
            //Si existe un error, significa que la validación falló para este campo.
            (touchedFields.username || errors.username.type === "required") && (
              // touchedFields.nombre || errors.nombre.type === "required": Esta parte comprueba si el campo "nombre" ha sido tocado
              //por el usuario (es decir, si ha interactuado con él) o si el error asociado es del tipo "required" (campo obligatorio).
              //Esto asegura que el mensaje de error solo se muestre si el usuario ha interactuado con el campo o si es obligatorio y aún no se ha completado.
              <span className="pet-span">{errors.username.message}</span>
              // <span className="pet-span">{errors.nombre.message}</span>:
              //Aquí se muestra el mensaje de error asociado al campo "nombre".
              // Si hay un error, este mensaje se mostrará para indicar al usuario qué problema ocurrió con el campo "nombre".
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="username" className="pet-label">
            Nombre del usuario
          </label>
          <input
            type="text"
            className="pet-input"
            placeholder="Ingresa tu nombre de usuario"
            {...register("firstname", {
              required: "El apellido es requerido",

              minLength: {
                value: 4,
                message:
                  "El apellido del usuario debe ser mayor a 4 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre de usuario debe tener máximo 20 caracteres",
              },
            })}
          />
          {errors.firstname &&
            (touchedFields.firstname ||
              errors.firstname.type === "required") && (
              <span className="pet-span">{errors.firstname.message}</span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="username" className="pet-label">
            Apellidos del usuario
          </label>
          <input
            type="text"
            className="pet-input"
            placeholder="Ingresa tu nombre de usuario"
            {...register("lastname", {
              required: "El apellido es requerido",

              minLength: {
                value: 4,
                message:
                  "El apellido del usuario debe ser mayor a 4 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre de usuario debe tener máximo 20 caracteres",
              },
            })}
          />
          {errors.lastname &&
            (touchedFields.lastname || errors.lastname.type === "required") && (
              <span className="pet-span">{errors.lastname.message}</span>
            )}
        </div>

        <div className="pet-input-container">
          <label htmlFor="email" className="pet-label">
            Correo electrónico
          </label>
          <input
            type="text"
            className="pet-input"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", {
              required: "El correo es requerido",
              //Tambien puedes generar una Expresiones regulares
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                message: "El correo no es válido",
              },
            })}
          />
          {errors.email &&
            (touchedFields.email || errors.email.type === "required") && (
              <span className="pet-span">{errors.email.message}</span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="password" className="pet-label">
            Contraseña
          </label>
          <input
            type="password"
            className="pet-input"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
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
          {errors.password &&
            (touchedFields.password || errors.password.type === "required") && (
              <span className="pet-span">{errors.password.message}</span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="username" className="pet-label">
            Ubicacion
          </label>
          <input
            type="text"
            className="pet-input"
            placeholder="Ingresa tu ubicacion"
            {...register("location", {
              required: "La ubicacion  es requerida",
            })}
          />
          {errors.location &&
            (touchedFields.location || errors.location.type === "required") && (
              <span className="pet-span">{errors.location.message}</span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="options" className="pet-label">
            Selecciona un tipo de usuario
          </label>
          <select
            {...register("role", {
              required: "El tipo de usuario es requerido",
            })}
            className="pet-input"
            id="options"
          >
            <option value="">Selecciona...</option>
            <option value="USER">Persona</option>
            <option value="SHELTER">Refugio</option>
          </select>
          {errors.role &&
            (touchedFields.role || errors.role.type === "required") && (
              <span className="pet-span">{errors.role.message}</span>
            )}
        </div>
        <button type="submit" className="pet-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
