import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/home/Home";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
