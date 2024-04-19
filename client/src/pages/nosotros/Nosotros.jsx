import React, { useState } from "react";
import "./Nosotros.scss";
import imgNosotros from "../../assets/images/imagen-nosotros.jpg";
import Huellas from "@/components/icons/Huellas";


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
            <div className="items-beneficios">
                <Huellas/>
               <p className="text-n">Ambiente sano y seguro</p>
            </div>
            <div className="items-beneficios">
               <Huellas/> 
                <p className="text-n">Equipos de alta calidad y totalmente estériles</p>
            </div>
            <div className="items-beneficios">
               <Huellas/>
                <p className="text-n">Diferentes tipos de aseo para tus mascotas</p>
            </div>
            <div className="items-beneficios" >
               <Huellas/>
                <p className="text-n">Conveniente</p>
            </div>
            <button type="submit" className="nosotros-button">
            <svg className="nosotros__icono" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
           <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
           <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
           <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
           <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
          </svg>
            <p className="nosotros__texto">Reservar ahora</p>
        
          </button>
         </div>
         </div>
         <img src={imgNosotros} alt="" className="nosotros__imagen" />
       </div >
    
    </main>
)}

export default Nosotros;