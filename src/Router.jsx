import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Board from "./components/Board";
import TaskView from "./components/TaskView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "board/:name",
        element: <Board />,
        children: [
          {
            path: "task/:taskName",
            element: <TaskView />,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
