import { createBrowserRouter } from "react-router-dom";

/* Layout */
import AppLayout from "../components/layout/AppLayout";

/* Public pages */
import Login from "../pages/Login";

/* Protected pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

/* Protected route wrapper */
import ProtectedRoute from "./ProtectedRoute";

/* Dashboard */
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  /* ======================
     PÁGINA PÚBLICA: LOGIN
     ====================== */
  {
    path: "/",
    element: <Login />,
  },

  /* ======================
     PÁGINAS PROTEGIDAS CON APP LAYOUT
     ====================== */
  {
    element: <ProtectedRoute />, // verifica token
    children: [
      {
        element: <AppLayout />, // layout principal con Navbar + Sidebar
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default router;
