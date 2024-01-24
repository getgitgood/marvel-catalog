import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import MainContent from './components/MainContent';
import Catalog from './pages/Catalog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />}>
      <Route path="catalog" element={<Catalog />} />
      <Route path="purchased" element={<div>Purchased</div>} />
      <Route path="favorites" element={<div>Favorites</div>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
