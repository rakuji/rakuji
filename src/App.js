import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Newslist from "./pages/Newslist/Newslist";
import Votelist from "./pages/Newslist/Votelist";
import Cooperationform from "./pages/Newslist/Cooperationform";
import Products from "./pages/Products/Products";
import Product_detail from "./pages/Products/Product_detail";
import Booking from "./pages/Booking/Booking";
import Booking_information from "./pages/Booking/Booking_information";
import Booking_finish from "./pages/Booking/Booking_finish";
import Cart from "./pages/Cart/Cart";
import Cart_info from "./pages/Cart/Cart_info";
// import Cart_order from "./pages/Cart/Cart_order";
import Cart_confirm from "./pages/Cart/Cart_confirm";
import Recipes from "./pages/Recipes/Recipes";
import Box from "./pages/Recipes/Box";
import Store from "./pages/Store/Store";
import MyBreadcrumb from "./pages/About/myComponents/MyBreadcrumb";




//購物車
// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from "./pages/Cart/utils/useCart";
import { SecondCartProvider } from "./pages/Cart/utils/useSecondCart";

//test
import Category from "./pages/Recipes/Categorie";

function App() {
  return (
    <div className="App">
      <Nav />
      <MyBreadcrumb />
      {/* http://localhost:3000/categories */}
      {/* <Breadcrumb /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/newslist" exact>
          <Newslist />
        </Route>
        <Route path="/newslist/Cooperationform" exact>
          <Cooperationform />
        </Route>
        <Route path="/newslist/Votelist" exact>
          <Votelist />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/product_detail" exact>
          <Product_detail />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/cart/cart_info" exact>
          <Cart_info />
        </Route>
        {/* <Route path="/cart/cart_info/cart_order" exact>
          <Cart_order />
        </Route> */}
        <Route path="/cart/cart_info/cart_order/cart_confirm" exact>
          <Cart_confirm />
        </Route>
        <Route path="/booking" exact>
          <Booking />
        </Route>
        <Route path="/booking/booking_information" exact>
          <Booking_information />
        </Route>
        <Route path="/booking/booking_information/booking_finish" exact>
          <Booking_finish />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/recipes/id=:Recipes_ID" exact>
          <Box />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
