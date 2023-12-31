import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Favorite from "./pages/Favorite";
import Page404 from "./pages/Error404";

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
        element: <Favorite />
      }
    ]
  }, {
    path: '*',
    element: <Page404 />
  }
])

export default router