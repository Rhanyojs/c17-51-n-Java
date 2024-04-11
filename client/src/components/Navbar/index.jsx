import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserNav from './UserNav';
import useHandleResize from '@/hooks/useHandleResize';
import { Button } from '../ui/button';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const isMobile = useHandleResize({ breakpoint: 768 });
  const navigate = useNavigate();

  return (
    <nav
      className='h-16 bg-white px-4 md:px-6 flex items-center gap-1 md:gap-0 justify-between shadow-md md:text-[18px]'
    >
      {isMobile && (
        <div className={'flex gap-2'}>
          <Drawer user={user} setUser={setUser} />
          <div className='cursor-pointer' onClick={navigate.bind(this, '/')}  >
            <img
              // el logo se tendría que cambiar
              src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"
              alt="logo"
              className='w-[70px] h-[40px] min-w-[70px] mt-1 object-contain '
            />
          </div>
        </div>
      )}

      {
        !isMobile && (
          <>
            <div className={isMobile ? 'hidden' : 'cursor-pointer'} onClick={navigate.bind(this, '/')}  >
              <img
                // el logo se tendría que cambiar
                src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"
                alt="logo"
                className='w-[70px] h-[40px] min-w-[70px] mt-1 object-contain '
              />
            </div>
            <div id="mobileNav" className='flex items-center gap-3 ml-[50px]'>
              <button onClick={navigate.bind(this, '/')}>Inicio</button>
              <button onClick={navigate.bind(this, '/mascotas')}>Mascotas</button>
              <button onClick={navigate.bind(this, '/nosotros')}>Sobre nosotros</button>
              <button onClick={navigate.bind(this, '/contacto')} >Contacto</button>
            </div>
          </>
        )
      }

      <AuthNav isMobile={isMobile} user={user} setUser={setUser} />

    </nav>
  )
}


function AuthNav({ isMobile, user, setUser }) {

  const navigate = useNavigate();

  return (
    <>
      {
        (!user && !isMobile) && (
          <div id="userNav" className='flex gap-3'>
            <button onClick={setUser.bind(this, true)} >Inicia sesión</button>
            <button onClick={navigate.bind(this, '/register')} >Registrate</button>
          </div>
        )
      }
      {
        user && (
          <UserNav setUser={setUser} />
        )
      }
    </>
  )
}

function Drawer({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleDrawer();
    }
  };

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <button onClick={toggleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Contenido del Drawer */}
      <div className={isOpen ? `fixed inset-0 z-50 bg-gray-800 bg-opacity-50` : ''} onClick={handleBackgroundClick}>
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-semibold">Menú</h2>
            <button onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3">
            <ul className="space-y-2">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    toggleDrawer()
                    navigate('/')
                  }}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    toggleDrawer()
                    navigate('/masctotas')
                  }}
                >
                  Mascotas
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    toggleDrawer()
                    navigate('/nosotros')
                  }}
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    toggleDrawer()
                    navigate('/contacto')
                  }}
                >
                  Contacto
                </button>
              </li>
            </ul>
            {!user && (
              <div className='flex flex-col gap-3 pl-2 pr-5 w-[max-width]'>
                <Button className="" onClick={() => { toggleDrawer(); navigate('/register') }}>Registrarse</Button>
                <Button onClick={() => { toggleDrawer(); setUser(true) }}>Iniciar sesión</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}