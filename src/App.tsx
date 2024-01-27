import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import MainContent from './components/MainContent';
import Catalog from './pages/CatalogPage';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import Details from './pages/DetailsPage';
import PurchasedPage from './pages/PurchasedPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />}>
      <Route index element={<Navigate to={'catalog'} replace />} />
      <Route path="catalog" element={<Catalog />}>
        <Route path=":id" id=":id" element={<Details />} />
      </Route>
      <Route path="purchased" element={<PurchasedPage />}>
        <Route path=":id" element={<Details />} />
      </Route>
      <Route path="favorites" element={<div>Favorites</div>} />
    </Route>
  )
);

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
