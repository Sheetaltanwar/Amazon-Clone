import React from "react";
import "./NavbarBanner.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
export const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniT" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Custom Service" },
    { name: "Fashion" },
    { name: "Home & Kitchen" },
  ];
  return (
    <div className="navban">
      <div className="navbanOptions">
        <div className="All">
          <span>All</span>
          <IoMdArrowDropdown />
        </div>
        {options.map((items, idx) => (
          <Link to="/product" className="optionsNav">
            {items.name}
          </Link>
        ))}
      </div>
      <div className="navbanRightside">
        <img
          style={{ height: "31px" }}
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/March2025/SkyForce/400x39-SWM_NP._CB547718754_.jpg"
        />
      </div>
    </div>
  );
};
