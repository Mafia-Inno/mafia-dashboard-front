import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Routes>
      {routes
        .filter((route) => route.isRequireLogin === false)
        .map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </Routes>
  );
};

export default App;
