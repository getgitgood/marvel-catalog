import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import {
  CatalogPage,
  DetailsPage,
  AuthPage,
  UserCollectionPage,
  NotFoundPage,
  ErrorPage
} from './pages';

import { Provider } from 'react-redux';
import { setupStore } from './store';
import PrivateRoute from './utils/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './GlobalStyle';
import { MainContent } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to={'catalog'} replace />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="catalog" element={<CatalogPage />}>
        <Route path=":id" id=":id" element={<DetailsPage />} />
      </Route>
      <Route
        path="purchased"
        element={
          <PrivateRoute>
            <UserCollectionPage collectionName={'purchasedCards'} />
          </PrivateRoute>
        }
      >
        <Route path=":id" element={<DetailsPage />} />
      </Route>
      <Route
        path="favorites"
        element={
          <PrivateRoute>
            <UserCollectionPage collectionName={'favoriteCards'} />
          </PrivateRoute>
        }
      >
        <Route path=":id" element={<DetailsPage />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
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
