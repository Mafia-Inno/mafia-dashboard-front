import { RouteObject } from "react-router-dom";
import { Home, NotFound } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
