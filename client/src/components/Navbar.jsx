import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Navbar() {

  const [user, setUser] = useState('fdsa');

  const navigate = useNavigate();

  return (
    <nav
      className='h-16 bg-white px-4 md:px-6 flex items-center justify-between shadow-md md:text-[18px]'
    >

      <div className='cursor-pointer' onClick={navigate.bind(this, '/')}  >
        <img
          // el logo se tendría que cambiar
          src="https://livedemo00.template-help.com/wt_prod-28070/images/logo-default-387x68.png"
          alt="logo"
          className='w-[150px] object-contain '
        />
      </div>

      <ul className='flex gap-3'>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/mascotas">Mascotas</a>
        </li>
        <li>
          <a href="/nosotros">Sobre nosotros</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>

      {
        !user && (
          <div
            id="userNav"
            className='flex gap-3'
          >
            <button
              onClick={navigate.bind(this, '/login')}
            >
              Inicia sesión
            </button>
            <button
              onClick={navigate.bind(this, '/register')}
            >
              Registrate
            </button>
          </div>
        )
      }
      {
        user && (
          <div
            id="userNav"
            className='flex gap-3'
          >

          </div>
        )
      }

    </nav>
  )
}
