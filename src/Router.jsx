import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Board from "./components/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "board/:name",
        element: <Board />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
