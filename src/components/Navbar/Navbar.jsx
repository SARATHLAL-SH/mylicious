import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import locationIcon from "../../images/location.png";
import searchIcon from "../../images/searchicon.png";
import categoryIcon from "../../images/categories-grey.png";
import loginIcon from "../../images/profile-grey.png";
import cartIcon from "../../images/cart.png";
import downarrow from "../../images/chevron.png";
import coverimage from "../../images/covimg.png";
import menu from "../../images/menu.png";
import { useContext } from "react";
import { userContext } from "../Constants/Context";
import { NavLink } from "react-router-dom";
import Popup from "../Popup/Popup";
import Cart from "../Cart/Cart";
import Popup1 from "../Popup/Popup1";
import Categories from "./Categories";

function Navbar() {
  const [location, setLocation] = useState(null);
  const {
    objCounts,
    searchTerm,
    SearchTerm,
    onSearchHandler,
    isCartOpen,
    setIsCartOpen,
    toggleCart,
    toggleCategory,
    isCategoryOpen,
  } = useContext(userContext);
  const [notification, setnotication] = useState();
  const notificationCount = objCounts && objCounts.length;
  const [isClassName, setIsCalssName] = useState(false);

  //  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleClassName = () => {
    setIsCalssName(!isClassName);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported in this browser.");
    }
    setnotication(notificationCount);
  }, [objCounts]);

  return (
    <div className="navWrapper">
      <div className="navcontainer">
       <div className="covlogContianer">
       <NavLink className="myNav" to="/">   <img src={coverimage} alt="" className="covlogo" /></NavLink>
        </div>
        <div className="locationContainer">
          <div className="locationimgContainer">
            <img className="location" src={locationIcon}></img>
          </div>
          <div className="locationDescriptionContainer">
            <div className="locationHeadContainer">
              <h3 className="locDescHead"> Bangalore </h3>
              <img className="downarrow" src={downarrow} />
            </div>
            <div className="location">
              <p className="locDescsubhead">Bengaluru, Karnataka, India</p>

              {location && <h6 className="location">{location.latitude}</h6>}
            </div>
          </div>
        </div>
        <div className="searchBarContainer">
          <input
            type="text"
            className="searhArea"
            onChange={onSearchHandler}
            placeholder="Search for any delicious product"
            value={searchTerm}
          />
          <div className="searchIconContainer">
            <img className="searchIcon" src={searchIcon} alt="search" />
          </div>
        </div>
        <div className="navmenuContainer" onClick={toggleClassName}>
          <img src={menu} alt="" className="navmenu" />
        </div>
        <div className={`myDropDown ${isClassName ? "active" : ""}`}>
          <NavLink className="myNav" to="/">
            {" "}
            <label onClick={toggleCategory}>Categroy</label>
          </NavLink>
          <NavLink className="myNav" to="/login">
            {" "}
            <label>Login</label>
          </NavLink>
          <label onClick={toggleCart}>Cart</label>
        </div>
        <div className="categoriesContainer">
          <div className="categoriesIconContainer">
            <img className="categoriesIcon" src={categoryIcon} alt="categroy" />
          </div>
          <div className="categoryDesc" onClick={toggleCategory}>
            <p className="categoriesDes">Categories</p>
          </div>
        </div>
        <div className="loginContainer">
          <div className="loginIconContainer">
            <img src={loginIcon} alt="" className="loginIcon" />
          </div>
          <div className="loginDesContaier">
            <p className="loginDes">Login</p>
          </div>
        </div>
        <div className="NavCartContainer">
          <div className="cartIconContianer">
            <img src={cartIcon} alt="" className="cartIcon" />
          </div>
          <div className="cartDescContainer">
         
            {notification > 0 ? (
              <div className="cartnotification">{notification}</div>
            ) : null}
            <p className="cartDes" onClick={toggleCart}>
              Cart
            </p>
            {/* </NavLink> */}
            {isCartOpen && (
              <Popup>
                <h2>Cart</h2>
                <Cart />
                <button onClick={toggleCart}>Close</button>
              </Popup>
            )}
            {isCategoryOpen && (
              <Popup1>
                <Categories />
              </Popup1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
