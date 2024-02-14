import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Item from "./components/Item/Item";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "Products", element: <Products /> },
        { path: "products/:id", element: <Item /> },
        { path: "home", element: <Home /> },
      ],
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />;
}

export default Router;
