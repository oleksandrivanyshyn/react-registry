import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './pages/Root.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchPage from './pages/SearchPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';

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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const term = url.searchParams.get('term');
          const res = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`,
          );
          const data = await res.json();
          return data.objects;
        },
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
