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
import UserCollections from './pages/UserCollections';
import AuthPage from './pages/AuthPage';
import PrivateRoute from './utils/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './GlobalStyle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />}>
      <Route index element={<Navigate to={'catalog'} replace />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="catalog" element={<Catalog />}>
        <Route path=":id" id=":id" element={<Details />} />
      </Route>
      <Route
        path="purchased"
        element={
          <PrivateRoute>
            <UserCollections collectionName={'purchasedCards'} />
          </PrivateRoute>
        }
      >
        <Route path=":id" element={<Details />} />
      </Route>
      <Route
        path="favorites"
        element={
          <PrivateRoute>
            <UserCollections collectionName={'favoriteCards'} />
          </PrivateRoute>
        }
      >
        <Route path=":id" element={<Details />} />
      </Route>
    </Route>
  )
);

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
