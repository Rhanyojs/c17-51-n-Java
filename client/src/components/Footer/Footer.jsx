import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="pie_pagina">
      <section className="pie_pagina__items">
        <h2 className="pie_pagina__p">adopta.me@gmail.org</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">
              Pasaje Libertador Guzmán 876
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Misiones, Argentina.
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__number">
              + 54 035115678921
            </a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__servicios">
        <h2 className="pie_pagina__titulo">Servicios</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">
              Adopción
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Baño y Aseo
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Corte de pelo
            </a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__contato">
        <h2 className="pie_pagina__titulo">Suscribete!</h2>
        <ul className="pie_pagina__lista">
          <fieldset className="formulario__campo">
            <p>Para recibir novedades, eventos y más.</p>
            <input
              name="email"
              id="email"
              className="campo__completo"
              placeholder="E-mail"
              type="email"
              minlength="5"
              required
            />
            <span className="mensaje-error"></span>
          </fieldset>
        </ul>
      </section>
      <section className="pie_pagina__redes-sociales">
        <ul className="pie_pagina__lista redes-sociales__lista">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#bd177a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-instagram"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#bd177a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-youtube"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#bd177a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-twitter"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#bd177a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
