import { useState } from 'react';
import { Button } from '@ui/button';
import { useNavigate } from 'react-router-dom';
import { navItems } from './navItems';



export default function Drawer({ user, setUser }) {
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
            <ul className="space-y-2 mb-2">
              {
                navItems.map((item, index) => (
                  <NavDrawerItem key={index} href={item.href} navigate={navigate} onClick={toggleDrawer}>
                    {item.name}
                  </NavDrawerItem>))
              }
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

function NavDrawerItem({ children, href, navigate, onClick }) {
  return (
    <li>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          onClick()
          navigate(href)
        }}
      >
        {children}
      </button>
    </li>
  );
}