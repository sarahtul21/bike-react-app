
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import View from './pages/View';
import Blog from './pages/Blog';
import FullScreenLoading from './components/FullScreenLoading';


let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <View/>;
    },
  },
  {
    path: "/blog",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Blog/>;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<FullScreenLoading />} />;
}

