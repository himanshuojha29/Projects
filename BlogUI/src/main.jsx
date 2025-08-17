import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blob from './pages/Blob.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: "",
      index: true,
      Component: Home
    },
    {
      path: "/blob/:id",
      Component: Blob
    },
    {
      path: "/about",
      Component: About
    }]
  }]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
