import DashBoard from "../modules/weatherApp";
import { BrowserRouter, useRoutes } from "react-router-dom";

const baseRoutes = [
  {
    path: "",
    element: <DashBoard />,
    children: [],
  },
];

const App = () => {
  const element = useRoutes([...baseRoutes]);
  return element;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
