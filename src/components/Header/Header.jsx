import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div>Logo</div>
        <nav></nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
