
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import View from './pages/View';
import Blog from './pages/Blog';


let router = createBrowserRouter([
  {
    path: "/sarah",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <View/>;
    },
  },
  {
    path: "/mourad",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Blog/>;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router}  />;
}

