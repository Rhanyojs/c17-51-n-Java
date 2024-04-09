import React from "react";
import "./LandingPage.scss";
function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>¡Bienvenido a nuestra página de aterrizaje!</h1>
      </header>
      <main>
        <p>Esta es una descripción de lo que ofrece tu producto o servicio.</p>
        <form>
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="submit">Suscribirse</button>
        </form>
      </main>
      <footer>
        <p>Contacto: info@example.com</p>
      </footer>
    </div>
  );
}

export default LandingPage;
