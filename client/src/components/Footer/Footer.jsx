import "./Footer.scss";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
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
        <section className="flex flex-col w-[max-content]">
          <h2 className="pie_pagina__titulo">Servicios</h2>
          <ul className="pie_pagina__lista">
            <li>
              <a href="#" className="pie_pagina__link">
                Adopción
              </a>
              <a href="#" className="pie_pagina__link">
                Adopción
              </a>
            </li>
            <li>
              <a href="#" className="pie_pagina__link">
                Baño y Aseo
              </a>
              <a href="#" className="pie_pagina__link">
                Baño y Aseo
              </a>
            </li>
            <li>
              <a href="#" className="pie_pagina__link">
                Corte de pelo
              </a>
              <a href="#" className="pie_pagina__link">
                Corte de pelo
              </a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col w-[max-content]">
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
                minLength="5"
                required
              />
              <span className="mensaje-error"></span>
            </fieldset>
          </ul>
        </section>

        <ul className="pie_pagina__lista_redes-sociales__lista">
          <li>
            <FaFacebook size={30} color="#bd177a" />
          </li>
          <li>
            <FaInstagram size={30} color="#bd177a" />
          </li>
          <li>
            <FaYoutube size={30} color="#bd177a" />
          </li>
          <li>
            <FaTwitter size={30} color="#bd177a" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
