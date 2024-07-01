import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Toys from "./pages/gifts/Toys";
import AboutUs from "./pages/About/AboutUs";
// import Gifts from './pages/gifts/Gifts';
import Contact from "./pages/Contacts/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import Team from "./components/Team/Team";
import Confirmation from "./pages/Confirmation/Confirmation";
import Cancellation from "./pages/Cancellation/Cancellation";
import OrderDetails from "./pages/Order/Orderdetails";
import MyOrders from "./pages/Order/MyOrders";
import BambooProducts from "./pages/ProductsPage/BambooProducts";
import Fashion from "./pages/Categories/Fashion";
import BodyCare from "./pages/Categories/BodyCare";
import Furniture from "./pages/Categories/Furniture";
import Stationary from "./pages/Categories/Stationary";
import Gifts from "./pages/Categories/Gifts";
import Checkout from "./pages/Order/Checkout";
import Cart from "./pages/Order/Cart";
import Error from "./pages/404-Page/Error";
import ProductDetails from "./components/Products/ProductDetails";
import Help from "./pages/Help/Help";
import Privacy from "./pages/Privacy-Policy/Privacy";
import Payment from "./pages/Payment/Payment";
import ReturnAndCancellation from "./pages/ReturnAndCancellation/returnAndCancellation";
import EPRPage from "./pages/EPRPage/EPR_Page";
import Signup from "./pages/Signup/Signup";
import FAQ from "./pages/FAQ/Faq";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      {/* Drop down of categories */}

      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/fashion" element={<Fashion />} />
      <Route path="/categories/bodycare" element={<BodyCare />} />
      <Route path="/categories/furniture" element={<Furniture />} />
      <Route path="/categories/stationary" element={<Stationary />} />
      <Route path="/categories/gifts" element={<Gifts />} />

      <Route path="about" element={<AboutUs />} />
      <Route path="help" element={<Help />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="team" element={<Team />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="cancel" element={<Cancellation />} />
      <Route path="orderDetails" element={<OrderDetails />} />
      <Route path="myOrders" element={<MyOrders />} />
      <Route path="bambooProducts" element={<BambooProducts />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="Payment" element={<Payment />} />
      <Route path="returnAndCancellation" element={<ReturnAndCancellation />} />
      <Route path="EPR_Page" element={<EPRPage />} />
      <Route path="signup" element={<Signup/>} />
      <Route path="faq" element={<FAQ/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
