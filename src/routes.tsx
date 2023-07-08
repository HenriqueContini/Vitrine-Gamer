import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  }, {
    path: '/',
    element: <App />,
    children: [{
        index: true,
        element: <Home />
      }, {
        path: 'favorites',
        element: <div>Favoritos</div>
      }
    ]
  }
])

export default router