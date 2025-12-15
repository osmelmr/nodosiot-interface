import Nodes from "../pages/Nodes";
import Sensors from "../pages/Sensors"; // <-- CORRECTO
import Readings from "../pages/Readings";
import Alerts from "../pages/Alerts";
import Summary from "../pages/Summary";
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
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
          { path: "/settings", element: <Settings /> },
          { path: "/nodes", element: <Nodes /> },
          { path: "/sensors", element: <Sensors /> },
          { path: "/readings", element: <Readings /> },
          {path: "/alerts", element: <Alerts />},
          {path: "/summary", element: <Summary />},


        ],
      },
    ],
  },
]);

export default router;
