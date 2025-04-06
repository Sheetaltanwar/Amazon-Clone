import React from "react";
import { RiStarSLine } from "react-icons/ri";
import "./Product.css";
import ProductDetail from "./product.json";
import { RiStarSFill } from "react-icons/ri";
import { useSelector,useDispatch } from "react-redux";
import {addToCart} from '../../redux/actions/Actions'
import {toast,ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactTostify.css'


const Product = () => {
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.items);
  const handleAddToCart=(items)=>{
        toast.success("Added in cart",{position:"bottom-right"})
        dispatch(addToCart(items));
  }
  return (
    <div className="big-container1">
      <div className="Pnavbar">
        <div className="Pbold">Electronics</div>
        <div className="Pnavitems">Mobiles & Accessories</div>
        <div className="Pnavitems">Laptops</div>
        <div className="Pnavitems">TV & Home Entertainment</div>
        <div className="Pnavitems"> Audio</div>
        <div className="Pnavitems">Cameras</div>
        <div className="Pnavitems">Smart Technologies</div>
        <div className="Pnavitems">Musical Instruments</div>
        <div className="Pnavitems">Office & Stationary</div>
      </div>
      <div className="Pmain-content">
        <div className="Psidebar">
          <div className="category">Category</div>
          <div className="smallfont">Computers & Accessories</div>
          <div className="boldContent">
            <div>Macbooks</div>
            <div>Amazon Prime</div>
            <div>Average Customer Review</div>
          </div>

          <div className="stars">
            <div className="stars1">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
              <span className="up"> & Up</span>
            </div>
            <div className="stars2">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine /> <span className="up"> & Up</span>
            </div>
            <div className="stars3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <span className="up"> & Up</span>
            </div>
            <div className="stars4">
              <RiStarSFill />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSFill />
              <RiStarSLine />
              <span className="up"> & Up</span>
            </div>
          </div>

          <div className="boldContent">
            <div>Amazon Prime</div>
            <div>Average Customer Review</div>
          </div>

          <div className="boldContent">
            <div>Amazon Prime</div>
            <div>Average Customer Review</div>
          </div>
          <div className="boldContent">
            <div>Amazon Prime</div>
            <div>Average Customer Review</div>
          </div>
          <div className="boldContent">
            <div>Amazon Prime</div>
            <div>Average Customer Review</div>
          </div>
        </div>

        <div className="PRightContent">
          <div className="showBar">
            1-4 of 4 results for <span className="Mac"> Macbooks</span>
          </div>
          <div className="right-main-content">
            {ProductDetail.product.map((items, idx) => (
              <div key={idx}style={{ boxShadow: "1px 1px 10px 1px rgb(209, 206, 206)" }}>
                <div className="Pimage-Bigcontainer">
                  <img
                    style={{ height: "250px", width: "250px" }}
                    src={items.imageUrl}
                  />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div className="content-box">{items.name}
                <div className="stars">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />  
              </div> 

              <div className="rupees">
                Rs. 67999
                <div  onClick={()=>handleAddToCart(items)} className="Pbtn">Add to Cart</div>
              </div>

              <div>Up to 10% off on select card</div>
              <div style={{fontSize:'12px',fontWeight:'600'}}> Free Delivery By Amazon</div>
              </div>
                

                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
export default Product;
