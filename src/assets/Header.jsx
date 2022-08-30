import React from "react";
import logo from "./images/logo.png";

const Header = () => {
    return (
        <div className="container">
        <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Reaper"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Ropa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header">Novedades</a>
        </li>
</ul>
</div>
    )
}

export default Header;