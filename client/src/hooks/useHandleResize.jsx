import { useEffect, useState } from 'react';

export default function useHandleResize({ breakpoint }) {
  const [isLower, setIsLower] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleResize = (event) => {
      setIsLower(event.matches);
    };

    // Agregar el oyente de eventos para el media query
    mediaQuery.addEventListener('change', handleResize);

    // Llamar a handleResize una vez para inicializar el estado
    handleResize(mediaQuery);

    return () => {
      // Eliminar el oyente de eventos cuando el componente se desmonte
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [breakpoint]);

  return isLower;
}