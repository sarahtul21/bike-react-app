
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Sarah from './pages/Sarah';
import Mourad from './pages/Mourad';


let router = createBrowserRouter([
  {
    path: "/sarah",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Sarah />;
    },
  },
  {
    path: "/mourad",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Mourad/>;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router}  />;
}

