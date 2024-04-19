import React from "react";
import "./Register.scss";
import Footer from "@/components/Footer/Footer";

const Register = () => {
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
    // Aquí puedes realizar tus operaciones asíncronas, como una petición a una API
    // Por ahora, mostraremos un SweetAlert y luego resetearemos el formulario
    await Swal.fire({
      icon: "success",
      title: "¡Registro exitoso!",
      text: "Tu formulario ha sido enviado correctamente.",
    });

    // Reseteamos el formulario después de mostrar el SweetAlert
    reset();
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
            {...register("nombre", {
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
          {errors.nombre &&
            // errors.nombre: Esto verifica si hay un error asociado al campo "nombre".
            //Si existe un error, significa que la validación falló para este campo.
            (touchedFields.nombre || errors.nombre.type === "required") && (
              // touchedFields.nombre || errors.nombre.type === "required": Esta parte comprueba si el campo "nombre" ha sido tocado
              //por el usuario (es decir, si ha interactuado con él) o si el error asociado es del tipo "required" (campo obligatorio).
              //Esto asegura que el mensaje de error solo se muestre si el usuario ha interactuado con el campo o si es obligatorio y aún no se ha completado.
              <span className="pet-span">{errors.nombre.message}</span>
              // <span className="pet-span">{errors.nombre.message}</span>:
              //Aquí se muestra el mensaje de error asociado al campo "nombre".
              // Si hay un error, este mensaje se mostrará para indicar al usuario qué problema ocurrió con el campo "nombre".
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
            {...register("correo", {
              required: "El correo es requerido",
              //Tambien puedes generar una Expresiones regulares
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                message: "El correo no es válido",
              },
            })}
          />
          {errors.correo &&
            (touchedFields.correo || errors.correo.type === "required") && (
              <span className="pet-span">{errors.correo.message}</span>
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
              <span className="pet-span">{errors.contraseña.message}</span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="confirmPassword" className="pet-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="pet-input"
            placeholder="Confirma tu contraseña"
            {...register("confirmarContraseña", {
              required: "La confirmación de la contraseña es requerida",
              validate: (value) => {
                return (
                  value === watch("contraseña") ||
                  "Las contraseñas no coinciden"
                );
              },
            })}
          />
          {errors.confirmarContraseña &&
            (touchedFields.confirmarContraseña ||
              errors.confirmarContraseña.type === "required") && (
              <span className="pet-span">
                {errors.confirmarContraseña.message}
              </span>
            )}
        </div>
        <div className="pet-input-container">
          <label htmlFor="options" className="pet-label">
            Selecciona un tipo de usuario
          </label>
          <select
            {...register("tipoDeUsuario", {
              required: "El tipo de usuario es requerido",
            })}
            className="pet-input"
            id="options"
          >
            <option value="">Selecciona...</option>
            <option value="opcion1">Persona</option>
            <option value="opcion2">Refugio</option>
            <option value="opcion3">Administrador</option>
          </select>
          {errors.tipoDeUsuario &&
            (touchedFields.tipoDeUsuario ||
              errors.tipoDeUsuario.type === "required") && (
              <span className="pet-span">{errors.tipoDeUsuario.message}</span>
            )}
        </div>
        <button type="submit" className="pet-button">
          Registrarse
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
