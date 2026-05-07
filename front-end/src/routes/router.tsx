// DEPENDANCE
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// LAYOUT (Header & Footer)
import RootLayout from '../components/layout/RootLayout';

// COMPOSANTS (pour la protection des routes)
import ProtectedRoute from '../components/navigation/ProtectedRoute';
import GuestRoute from '../components/navigation/GuestRoute';

// COMPOSANT (pour le chargement)
import Spinner from '../components/design-system/Spinner';

// PAGES (Chargement paresseux / Code Splitting)
const LandingPageView = lazy(() => import('../pages/1-landing-page/Landing-page-view'));
const AboutPageView = lazy(() => import('../pages/2-about-page/About-page-view'));
const CatalogPageView = lazy(() => import('../pages/3-catalog-page/Catalog-page-view'));
const VehiclePageView = lazy(() => import('../pages/4-vehicle-page/Vehicle-page-view'));
const ContactPageView = lazy(() => import('../pages/5-contact-page/Contact-page-view'));
const LoginPageView = lazy(() => import('../pages/6-login-page/Login-page-view'));
const AccountPageView = lazy(() => import('../pages/7-account-page/account-page-view'));
const ErrorPageView = lazy(() => import('../pages/8-error-page/Error-page-view'));

/** Composant servant à la redirection des pages de l'application */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Spinner />}><LandingPageView /></Suspense>,
      },
      {
        path: 'catalog',
        element: <Suspense fallback={<Spinner />}><CatalogPageView /></Suspense>,
      },
      {
        path: 'catalog/:id',
        element: <Suspense fallback={<Spinner />}><VehiclePageView /></Suspense>,
      },
      {
        path: 'about',
        element: <Suspense fallback={<Spinner />}><AboutPageView /></Suspense>,
      },
      {
        path: 'contact',
        element: <Suspense fallback={<Spinner />}><ContactPageView /></Suspense>,
      },
      {
        path: 'login',
        element: (
          <GuestRoute>
            <Suspense fallback={<Spinner />}><LoginPageView /></Suspense>
          </GuestRoute>
        ),
      },
      {
        path: 'account',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Spinner />}><AccountPageView /></Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Suspense fallback={<Spinner />}><ErrorPageView /></Suspense>,
      },
    ],
  },
]);
