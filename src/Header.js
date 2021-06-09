import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./component/StateProvider";
import { auth } from "./component/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  // console.log(basket)

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-option-line-one">Hello {user?.email}</span>
            <span className="header-option-line-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd linnk */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-line-one">Return</span>
            <span className="header-option-line-two">& Order</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-line-one">Your</span>
            <span className="header-option-line-two">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header-link">
          <div className="header-option-basket">
            {/* Shopping Basket Icon */}
            <ShopingBasketIcon />
            {/* number of items in basket */}
            <span className="header-option-line-two header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
