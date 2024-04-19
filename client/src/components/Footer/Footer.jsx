import React from "react";
import "./Footer.scss";

const Footer =() => {
    return (
        <footer className="pie_pagina">
      <section className="pie_pagina__items">
        <h2 className="pie_pagina__titulo">Sobre Nosotros</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">Preguntas frecuentes</a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__servicios">
        <h2 className="pie_pagina__titulo">Servicios</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">Adopción</a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">Baño y Aseo</a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__contato">
        <h2 className="pie_pagina__titulo">Contacto</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">0800 444 </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">ayuda@ayuda.com</a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__redes-sociales">
        <h2 className="pie_pagina__titulo">Acceda a nuestras redes</h2>
        <ul className="pie_pagina__lista redes-sociales__lista">
        <li><img src="./public/facebook.png" alt="ícono de facebook" /></li>
          
        </ul>
        <h2 className="pie_pagina__logo">
          <span className="pie_pagina__logo--negrito">Adopta</span>me
        </h2>
      </section>
    </footer>

    )
}

export default Footer;