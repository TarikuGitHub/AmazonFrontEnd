import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="headre_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_cleaelink">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="headeroptionLineTwo">
              {user ? "Sign out" : "Sing in"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header_cleaelink">
          <div className="header_option">
            <span className="header_optionOne"> Returns </span>
            <span className="headeroptionLineTwo"> Order </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionOne"> Your </span>
          <span className="headeroptionLineTwo"> Prime </span>
        </div>
        <Link to="/checkout" className="header_cleaelink">
          <div className="headre__optionBasket">
            <ShoppingBasketIcon />
            <span className="headeroptionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
