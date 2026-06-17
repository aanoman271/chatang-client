import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import register from "../pages/register/register";
import Login from "../pages/login/Login";
import PrivetRoute from "../privetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        Component: register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
