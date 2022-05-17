import React from "react";
import "./styles/style.css";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
