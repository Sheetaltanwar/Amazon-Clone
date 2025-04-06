import React from "react";
import amazonLogo from "../../../assets/amazonLogo.png";
import india from "../../../assets/india.png";
import { MdLocationPin } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavbarBelt.css";

export const NavbarBelt = () => {
  const cardItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="navbarBelt">
        <div className="leftNavBelt">
          {/* AMAZON LOGO */}
          <div className="leftNavBeltLogo">
            <img className="amazonLogoNavbar" src={amazonLogo} />
            <div className="in">
              <span>.in</span>
            </div>
          </div>
          {/* LOCATION */}

          <div className="navbarBeltLocation">
            <div className="navbarBeltLocationImg">
              <div className="navbarBeltLocationImgIcon">
                <CiLocationOn />
              </div>
            </div>
            <div className="navbarBeltLocationPlace">
              <div className="navbarBeltLocationTop">Delivering to Pune</div>
              <div className="navbarBeltLocationBottom">Update Location</div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="navbarBeltSearchBox">
            <div className="navbarBeltSearchDiv">
              <div className="navbarBeltSearchBoxAll">
                <div className="navSearchAllText">All</div>
                <IoMdArrowDropdown />
              </div>

              <div className="navInput">
                <input className="input" type="text"></input>
              </div>

              <div className="searchIconBox">
                <IoSearch className="searchIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="rightNavBelt">
          <div className="indianFlagCode">
            <img className="imgind" src={india} />
            <div className="EN">
              EN
              <IoMdArrowDropdown />
            </div>
          </div>

          <div
            className="navbarBeltLocation"
            style={{ position: "relative", left: "20px" }}
          >
            <div className="navbarBeltLocationPlace">
              <div className="navbarBeltLocationTop">Hello,User</div>
              <div className="navbarBeltLocationBottom">
                <b>Accounts & Lists</b>
              </div>
            </div>
          </div>

          <div
            className="navbarBeltLocation"
            style={{ position: "relative", left: "20px" }}
          >
            <div className="navbarBeltLocationPlace">
              <div className="navbarBeltLocationTop">Returns</div>
              <div className="navbarBeltLocationBottom">
                <b>& Orders</b>
              </div>
            </div>
          </div>

          <Link
            style={{ color: "white" }}
            to="/cart"
            className="CART-container"
          >
            <span className="cartNumber">{cardItems.length}</span>
            <div className="carto">
              <TiShoppingCart className="cart" />
              <span className="cartTitle">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
