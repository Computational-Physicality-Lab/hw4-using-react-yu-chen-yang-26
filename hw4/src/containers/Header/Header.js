import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-bar"></div>
      <div className="header-banner">
        <img
          className="header-logo"
          alt=""
          src={logo}
          onClick={() => navigate("/")}
        />
        <div className="header-name">Scotty Shirts U Illustrate (SSUI) </div>
        <div className="header-cart" onClick={() => navigate("/cart")}>
          <img className="header-cart-pic" alt="" src={shoppingCart} />
          <div className="header-cart-number">{cart.length}</div>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="header-hamburger-button">
            <div className="header-hamburger-button-bar"></div>
            <div className="header-hamburger-button-bar"></div>
            <div className="header-hamburger-button-bar"></div>
          </div>
        </label>
        <ul className="header-hamburger-menu">
          <li onClick={() => navigate("/cart")}>
            Shopping Cart({cart.length})
          </li>
          <li onClick={() => navigate("/products")}>T-SHIRTS</li>
          <li onClick={() => navigate("/not_implemented")}>
            CREATE FROM PICTURE
          </li>
          <li onClick={() => navigate("/not_implemented")}>CREATE YOUR OWN</li>
          <li onClick={() => navigate("/not_implemented")}>LOG IN</li>
          <li onClick={() => navigate("/not_implemented")}>Contact Us</li>
          <li onClick={() => navigate("/not_implemented")}>Site Map</li>
          <li onClick={() => navigate("/not_implemented")}>Privacy Policy</li>
          <li onClick={() => navigate("/not_implemented")}>Careers</li>
          <li onClick={() => navigate("/not_implemented")}>Reviews</li>
        </ul>
      </div>

      <div className="header-menu">
        <div className="header-menu-item" onClick={() => navigate("/products")}>
          T-SHIRTS
        </div>
        <div
          className="header-menu-item"
          onClick={() => navigate("/not_implemented")}
        >
          CREATE FROM PICTURE
        </div>
        <div
          className="header-menu-item"
          onClick={() => navigate("/not_implemented")}
        >
          CREATE YOUR OWN
        </div>
        <div
          className="header-menu-item"
          onClick={() => navigate("/not_implemented")}
        >
          ABOUT US
        </div>
        <div
          className="header-menu-item"
          onClick={() => navigate("/not_implemented")}
        >
          LOG IN
        </div>
      </div>
    </header>
  );
};
export default Header;
