// DÉPENDANCE
import { RouterProvider } from 'react-router-dom';

// COMPOSANTS
import { router } from './routes/router';
import { AuthUserProvider } from './context/AuthUserContext';

// Composant principal de l'application
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
