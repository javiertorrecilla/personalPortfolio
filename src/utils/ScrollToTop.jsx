import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    // Escuchar cambios en la ruta
    const unlisten = history.listen(() => {
      // Hacer scroll al principio de la página
      window.scrollTo(0, 0);
    });

    // Limpieza: desuscribirse del listener cuando el componente se desmonta
    return () => {
      unlisten();
    };
  }, [history]); // Dependencia: history

  // Este componente no renderiza nada
  return null;
}

export default withRouter(ScrollToTop);