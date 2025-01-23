import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll al principio de la página cada vez que la ubicación cambie
  }, [location]); // Dependencia: location

  return null; // Este componente no renderiza nada
}

export default ScrollToTop;