import React, { useState } from "react";
import "./Nosotros.scss";
import imgNosotros from "../../assets/images/imagen-nosotros.jpg";

const Nosotros = () => {
    return (
        <main className="contenedor">
       <div className="nosotros">
        <div className="nosotros__contenido">
        <h1 className="title-principal">Por qué elegirnos</h1>
        <h2 className="title-secundario">Algunas de las razones por las que la gente prefiere nuestros servicios</h2>
        <p className="parrafo-nosotros">Desde nuestra fundación en 1999, hemos trabajado para brindar los mejores servicios de cuidado para sus perros y gatos. 
          Además, los dueños de mascotas en todo Estados Unidos eligen nuestro salón para:</p>
         <div className="container-beneficios">
            <div>
            <svg className="icono-hueso" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bone" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
           </svg>
                Ambiente sano y seguro
            </div>
            <div>
            <svg className="icono-hueso"  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bone" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
            </svg>
                Equipos de alta calidad y totalmente estériles
            </div>
            <div className="texto-items">
            <svg className="icono-hueso" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bone" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
            </svg>
                Diferentes tipos de aseo para tus mascotas
            </div>
            <div >
            <svg className="icono-hueso" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bone" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
            </svg>
                Conveniente
            </div>
            <button type="submit" className="nosotros-button">
            Reservar ahora
        
          </button>
         </div>
         </div>
         <img src={imgNosotros} alt="" className="nosotros__imagen" />
       </div >
    
    </main>
)}

export default Nosotros;