import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";
import ScrollToTop from "./components/ScrollToTop";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Newslist from "./pages/Newslist/Newslist";
import Products from "./pages/Products/Products";
import Product_detail from "./pages/Products/Product_detail";
import Booking from "./pages/Booking/Booking";
import Recipes from "./pages/Recipes/Recipes";
import Store from "./pages/Store/Store";
import Booking_information from "./pages/Booking/Booking_information";
import Booking_finish from "./pages/Booking/Booking_finish";
import Cart from "./pages/Cart/Cart";
import Cart_info from "./pages/Cart/Cart_info";
import Cart_order from "./pages/Cart/Cart_order";
import Cart_confirm from "./pages/Cart/Cart_confirm";

function App() {

  return (
    <div className="App">
      <Nav />

      <ScrollToTop>
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
          <Route path="/cart/cart_info/cart_order" exact>
            <Cart_order />
          </Route>
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
          <Route path="/store" exact>
            <Store />
          </Route>
        </Switch>
      </ScrollToTop>


      <Footer />
    </div>
  );
}

export default App;
