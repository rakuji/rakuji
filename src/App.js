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
import Recipes from "./pages/Recipes/Recipes";
import Box from "./pages/Recipes/Box";
import Store from "./pages/Store/Store";

//麵包屑  //安裝套件==> npm i react-router-config@5.1.1
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

//test
import Category from "./pages/Recipes/Categorie";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* http://localhost:3000/categories */}
      <Breadcrumb />
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
        <Route path="/recipes/box" exact>
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
