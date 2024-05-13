import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { NotFound } from "./pages/NotFound";

//Website
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import TagBooks from "./pages/TagBooks";
import Book from "./pages/Book";
import CategoryBooks from "./pages/CategoryBooks";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

//Customer Panel
import Register from "./pages/Customer/Register";
import Login from "./pages/Customer/Login";
import Dashboard from "./pages/Customer/Dashboard";
import Orders from "./pages/Customer/Orders";
import Cart from "./pages/Customer/Cart";
import AddressBook from "./pages/Customer/AddressBook";
import Accounts from "./pages/Customer/Accounts";
import OrderHistory from "./pages/Customer/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/books",
    element: <Books />,
    errorElement: <NotFound />,
  },
  {
    path: "/books/tag/:tag",
    element: <TagBooks />,
    errorElement: <NotFound />,
  },
  {
    path: "/book/:book_slug/:book_id",
    element: <Book />,
    errorElement: <NotFound />,
  },
  {
    path: "/categories",
    element: <Categories />,
    errorElement: <NotFound />,
  },
  {
    path: "/category/:category_slug/:category_id",
    element: <CategoryBooks />,
    errorElement: <NotFound />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <NotFound />,
  },
  {
    path: "/order/success",
    element: (
      <PrivateRoute>
        <OrderSuccess />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/customer/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/customer/orders",
    element: <Orders />,
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/dashboard",
    element: <AddressBook />,
    errorElement: <NotFound />
  },
  {
    path: "/customer/ordershistory",
    element: <OrderHistory />,
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
