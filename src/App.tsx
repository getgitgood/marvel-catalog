import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import MainContent from './components/MainContent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />}>
      <Route path="favorites" element={<div>Favorites</div>} />
      <Route path="purchased" element={<div>Purchased</div>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
