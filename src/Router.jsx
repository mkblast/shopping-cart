import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },

    {
      path: "shop",
      element: <Shop />
    },

    {
      path: "cart",
      element: <Cart />
    },

    {
      path: "product/:id",
      element: <Product />
    }

  ]);

  return <RouterProvider router={router} />;
}

export default Router;
