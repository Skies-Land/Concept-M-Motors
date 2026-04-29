// DÉPENDANCE
import { RouterProvider } from 'react-router-dom';

// CONTEXTE
import { AuthUserProvider } from './context/AuthUserContext';

// COMPOSANT
import { router } from './routes/router';

/** Composant principal de l'application */
export default function App() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">

      {/* Provider pour l'authentification de l'utilisateur */}
      <AuthUserProvider>
        {/* Router principal */}
        <RouterProvider router={router} />
      </AuthUserProvider>
    </div>
  );
}
