// DEPENDANCE
import { RouterProvider } from 'react-router-dom';
// COMPONENTS
import { router } from './routes/router';

// Composant principal de l'application
export default function App() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <RouterProvider router={router} />
    </div>
  );
}
