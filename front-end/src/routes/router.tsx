// DEPENDANCE
import { createBrowserRouter } from 'react-router-dom';

// LAYOUT (Header & Footer)
import RootLayout from '../components/layout/RootLayout';

// PAGES
import LandingPageView from '../pages/1-landing-page/Landing-page-view';
import AboutPageView from '../pages/2-about-page/About-page-view';
import CatalogPageView from '../pages/3-catalog-page/Catalog-page-view';
import VehiclePageView from '../pages/4-vehicle-page/Vehicle-page-view';
import ContactPageView from '../pages/5-contact-page/Contact-page-view';
import LoginPageView from '../pages/6-login-page/Login-page-view';
import ErrorPageView from '../pages/8-error-page/Error-page-view';
import AccountPageView from '../pages/7-account-page/account-page-view';

// RAPPEL : For better performance on large apps, use lazy loading: 
// EXAMPLE : const CatalogPage = lazy(() => import('../pages/3-catalog-page/CatalogPageView'));

// Composant servant à la redirection des pages de l'application
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
        element: <CatalogPageView />,
      },
      {
        path: 'catalog/:id',
        element: <VehiclePageView />,
      },
      {
        path: 'about',
        element: <AboutPageView />,
      },
      {
        path: 'contact',
        element: <ContactPageView />,
      },
      {
        path: 'login',
        element: <LoginPageView />,
      },

      // TODO : Sécuriser l'accès à la page compte
      {
        path: 'account',
        element: <AccountPageView />,
      },
      {
        path: '*',
        element: <ErrorPageView />,
      },
    ],
  },
]);
