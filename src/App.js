import React, { useEffect,useState } from "react";
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
import ClientCenter from "./pages/Member/clientCenter";

function App() {
  // 會員登入用的狀態 auth=true代表登入
  const [auth, setAuth] = useState(false)
  // const sesStorage  = sessionStorage;
  return (
    <div className="App">
      <Nav auth={auth}/>
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
        <Route path="/member/login" exact>
          <Login setAuth={setAuth} auth={auth}/>
        </Route>
        <Route path="/member/clientCenter" exact>
          <ClientCenter auth={auth}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
