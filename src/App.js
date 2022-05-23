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
import Products from "./pages/Products/Products";
import Booking from "./pages/Booking/Booking";
import Recipes from "./pages/Recipes/Recipes";
import Store from "./pages/Store/Store";
import Login from "./pages/Member/Login";
import Signup from "./pages/Member/Signup";
import Registration from "./pages/Member/Registration";
import ClientCenter from "./pages/Member/ClientCenter";
import CouponList from "./pages/Member/CouponList";


function App() {

  return (
    <div className="App">
      <Nav />
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
        <Route path="/booking" exact>
          <Booking />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Signup" exact>
          <Signup />
        </Route>
        <Route path="/Registration" exact>
          <Registration />
        </Route>
        <Route path="/ClientCenter" exact>
          <ClientCenter />
        </Route>
        <Route path="/CouponList" exact>
          <CouponList />
        </Route>

        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
