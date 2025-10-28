import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "//coin/:id", element: <Detail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
