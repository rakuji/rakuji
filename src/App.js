import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import BootstrapDatePicker from "./components/BootstrapDatePicker";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Newslist from "./pages/Newslist/Newslist";
import Products from "./pages/Products/Products";
import Booking from "./pages/Booking/Booking";
import Recipes from "./pages/Recipes/Recipes";
import Store from "./pages/Store/Store";


import ClientCenter from "./pages/Member/clientCenter";
import Contact from "./pages/Contact/Contact";
import Votelist from "./pages/Newslist/Votelist";
import Cooperationform from "./pages/Newslist/Cooperationform";
import Login from "./pages/Member/Login";
import Signup from "./pages/Member/Signup";
import Register from "./pages/Member/Register";
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
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/newslist" exact>
          <Newslist />
        </Route>
        <Route path="/Cooperationform" exact>
          <Cooperationform />
        </Route>
        <Route path="/Votelist" exact>
          <Votelist />
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

        <Route path="/contact" exact>
          <Contact />
        </Route>
        
        
        <Route path="/Signup" exact>
          <Signup />
        </Route>

        <Route path="/member/login" exact>
          <Login setAuth={setAuth} auth={auth}/>
        </Route>
        <Route path="/member/clientCenter" exact>
          <ClientCenter auth={auth}/>

        </Route>
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
      {/* <BootstrapDatePicker />   */}
    </div>
  );
}

export default App;
