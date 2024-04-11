import { useState } from 'react';

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

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
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={toggleDrawer}>
                  Inicio
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={toggleDrawer}>
                  Mascotas
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={toggleDrawer}>
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={toggleDrawer}>
                  Contacto
                </button>
              </li>
            </ul>
            {/* Aquí iría la lógica para mostrar botones de registro e inicio de sesión si no hay un usuario logueado */}
          </div>
        </div>
      </div>
    </>
  );
}
