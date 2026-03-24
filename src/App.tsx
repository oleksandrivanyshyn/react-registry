import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './pages/Root.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchPage from './pages/search/SearchPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import { searchLoader } from './pages/search/searchLoader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
