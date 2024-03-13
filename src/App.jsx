import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/product/ProductDetails.jsx";
import Navigation from "./layout/nav/Navigation.jsx";
import ProductCard from "./component/Home/ProductCard.jsx";
import Products from "./component/Home/Products.jsx";
import Product from "./component/Home/Product.jsx";
import Loader from "./layout/Loader.jsx";
import { useSelector } from "react-redux";
import Search from "./component/Home/Search.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layout/footer/Footer.jsx";
import Category from "./component/category/Category.jsx";
import Productttt from "./component/Home/Productttt.jsx";
import LoginSignUp from "./component/user/LoginSignUp.jsx";
import { loadUser } from "./actions/userAction.js";
import store from "./store.js";
import UserOptions from "./layout/Header/UserOperations.jsx";
import Profile from "./component/user/Profile.jsx";
import ProtectedRoute from "./component/Route/ProtectedRoute.jsx";
import UpdateProfile from "./component/user/UpdateProfile.jsx";
import UpdatePassword from "./component/user/UpdatePassword.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import Slidebar from "./component/admin/Slidebar.jsx";
import ProductList from "./component/admin/ProductList.jsx";
import NewProduct from "./component/category/NewProduct.jsx";
import Cart from "./component/cart/Cart.jsx";
import Pickup from "./component/pickup/Pickup.jsx";
import Test from "./component/pickup/Test.jsx";
import Notes from "./component/pickup/Notes.jsx";
import Shipping from "./component/cart/Shipping.jsx";
import ConfirmOrder from "./component/cart/ConfirmOrder.jsx";
// import axios from "axios";
import Payment from "./component/cart/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/cart/OrderSuccess.jsx";
import MyOrders from "./component/order/MyOrders.jsx";
import OrderDetails from "./component/order/OrderDetails.jsx";
import ForgotPassword from "./component/user/ForgotPassword.jsx";
import ResetPassword from "./component/user/ResetPassword.jsx";
import UpdateProduct from "./component/admin/UpdateProduct.jsx";
import OrderList from "./component/admin/OrderList.jsx";
import UsersList from "./component/admin/UserList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx";
import ProcessOrder from "./component/admin/ProcessOrder.jsx";
import PickupList from "./component/admin/PickupList.jsx";
// import Renthouse from "./component/category/Renthouse.jsx";
// import RenthouseChart from "./component/category/RenthouseChart.jsx";
import Bannerr from "./component/Home/Bannerr.jsx";
import apiInstance from "./config/axios.js";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await apiInstance.get("stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Navigation isAuthenticated={isAuthenticated} />

      {isAuthenticated && <UserOptions user={user} />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute
            path="/process/payment"
            element={<Payment />}
          />
        </Elements>
      )} */}

      <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
          <Route exact path="/process/payment" element={<ProtectedRoute />}>
            <Route exact path="/process/payment" element={<Payment />} />
          </Route>
        </Routes>
      </Elements>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route extact path="/Category" element={<Category />} />
        <Route extact path="/Pickup" element={<Pickup />} />
        <Route extact path="/Test" element={<Test />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/search" element={<Search />} />

        <Route path="/bannerr" element={<Bannerr />} />

        <Route path="/ProductCard" user={user} element={<ProductCard />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/sad" element={<Loader />} />
        <Route path="/Productttt" element={<Productttt />} />

        {/* <Route path="/Renthouse" element={<Renthouse />} />
        <Route path="/RenthouseChart" element={<RenthouseChart />} /> */}

        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/LoginSignup" element={<LoginSignUp />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />

          <Route
            isAdmin={true}
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route path="/Slidebar" element={<Slidebar />} />
          <Route
            isAdmin={true}
            path="/admin/products"
            element={<ProductList />}
          />
          <Route
            isAdmin={true}
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
          <Route isAdmin={true} path="/admin/users" element={<UsersList />} />
          <Route
            isAdmin={true}
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/pickup"
            element={<PickupList />}
          />

          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/admin/orders" element={<OrderList />} />
        </Route>
      </Routes>

      {/* <ProtectedRoute  path="/account" element={<Profile/>} />
        <ProtectedRoute  path="/me/update" element={<UpdateProfile/>} />
        <ProtectedRoute
          
          path="/password/update"
          element={<UpdatePassword/>}
        />
        <ProtectedRoute  path="/Slidebar" element={<Slidebar/>} />

        <ProtectedRoute
          isAdmin={true}
          
          path="/admin/dashboard"
          element={<Dashboard/>}
        />
        <ProtectedRoute
          isAdmin={true}
          
          path="/admin/products"
          element={<ProductList/>}
        />
        <ProtectedRoute
          isAdmin={true}
          
          path="/admin/product/:id"
          element={<UpdateProduct/>}
        />
        <ProtectedRoute
          isAdmin={true}
          
          path="/admin/users"
          element={<UsersList/>}
        />
        <ProtectedRoute
          isAdmin={true}
          
          path="/admin/user/:id"
          element={<UpdateUser/>}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          element={<ProcessOrder/>}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/pickup"
          element={<PickupList/>}
        />

        <ProtectedRoute  path="/Shipping" element={<Shipping/>} />
        <ProtectedRoute  path="/order/confirm" element={<ConfirmOrder/>} />
        <ProtectedRoute  path="/success" element={<OrderSuccess/>} />
        <ProtectedRoute  path="/orders" element={<MyOrders/>} />
        <ProtectedRoute  path="/order/:id" element={<OrderDetails/>} />
        <ProtectedRoute  path="/admin/orders" element={<OrderList/>} /> */}

      <Footer />
    </>
  );
};
export default App;
