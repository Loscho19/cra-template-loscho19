import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wenn sich der Pfad ändert, wird nach oben gescrollt.
 */
export default function ScrollToTop() {
  // Pfad wird von React Router abgerufen.
  const { pathname } = useLocation();

  useEffect(() => {
    // Window wird nach oben gescrollt, wenn der Paf sich ändert
    window.scrollTo(0, 0);
  }, [pathname]);

  // nichts wird zurückgegeben
  return null;
}
