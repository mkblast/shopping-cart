import App from "./App";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./ErrorPage";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

function Router() {
  const [cart, setCart] = useState([]);

  function handleClick(item) {
    if (cart.includes(item)) {
      return;
    }

    setCart(prev => [...prev, item]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },

    {
      path: "shop",
      element: <Shop click={handleClick} />
    },

    {
      path: "cart",
      element: <Cart ids={cart} />
    },

    {
      path: "product/:id",
      element: <Product />
    }

  ]);

  return <RouterProvider router={router} />;
}

export default Router;
