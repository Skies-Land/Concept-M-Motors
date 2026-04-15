// COMPONENTS
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import LandingPageView from '../pages/1-landing-page/Landing-page-view';

// RAPPEL : For better performance on large apps, use lazy loading: 
// EXAMPLE : const CatalogPage = lazy(() => import('../pages/3-catalog-page/CatalogPageView'));

// Composant servant à la redirection des pages de l'application au clic sur les liens du "header", "footer"
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPageView />,
      },
      {
        path: 'catalog',
        element: <div className="p-20 text-center text-2xl text-white">Catalogue (En cours de développement)</div>,
      },
      {
        path: 'about',
        element: <div className="p-20 text-center text-2xl text-white">À propos (En cours de développement)</div>,
      },
      {
        path: 'login',
        element: <div className="p-20 text-center text-2xl text-white">Connexion (En cours de développement)</div>,
      },
      {
        path: '*',
        element: <div className="p-20 text-center text-2xl text-white">404 - Page non trouvée</div>,
      },
    ],
  },
]);
