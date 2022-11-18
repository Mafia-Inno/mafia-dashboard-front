import { Home, NotFound } from "./pages";
import { Route } from "./types";

const routes: Route[] = [
  {
    path: "/",
    component: <Home />,
    isRequireLogin: false,
  },
  {
    path: "*",
    component: <NotFound />,
    isRequireLogin: false,
  },
];

export default routes;
