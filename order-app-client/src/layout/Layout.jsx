import React from "react";
import Navigation from "../components/navbar/Navigation";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <header>
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="container">{children}</main>

      {/* Footer */}
      <footer>{/* Include any footer content here */}</footer>
    </>
  );
};

export default Layout;
