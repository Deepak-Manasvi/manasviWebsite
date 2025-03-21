import React from "react";
import { useLocation } from "react-router-dom";
import Routess from "./components/Routess";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Headercopy from "./components/Headercopy";
import './App.css'

const App = () => {
  const location = useLocation();

  // Check if the current path is an admin path
  const isAdminRoute = location.pathname.startsWith("/admin" || "/Admin/");

  return (
    <div>
      {!isAdminRoute && (
        <>
          {/* <Header /> */}
          <Headercopy />
        </>
      )}
      <Routess />
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
