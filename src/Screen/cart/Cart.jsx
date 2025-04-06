import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/Actions";
import {toast,ToastContainer} from 'react-toastify'


const Cart = () => {
  const [cardItem,setCardItem]=useState([]);
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.items)
  
  let a=0;
  let cost=cardItem.map((item)=>{return a=a+item.price})

  useEffect(()=>{
    setCardItem(cartItems)
  },[cartItems])

const handleRemove=(id)=>{
      toast.error("Removed",{
        position:'bottom-right'
      })
      dispatch(removeFromCart(id));
}

  return (
    <div className="Cbig-container">
      <div className="Cleftpart">
        <div className="headPart">
        <div style={{fontSize:'20px',fontFamily:'Poppins'}}>
           Shopping Card
        </div>
        <div style={{fontFamily:'Poppins',fontSize:'14px',color:'rgb(16, 170, 170)',marginBottom:'10px'}}>
            Deselect all items
        </div>
        </div>


      {
        cartItems.map((item,ind)=>{
          return (
            <div className="Ccard">
            <div className="Cimg-content">
              <img
                className="Cimage"
                src={item.imageUrl}
              />
  
              <div className="Ccontent">
                {item.name}
                <div onClick={()=>handleRemove(item.id)} className="removeBtn">
                 Remove 
              </div>
              </div>

             
            </div>
  
            <div className="Crupees">{`Rs.${item.price}`}</div>
          </div>
          )
        })
      }
       


      </div>

      <div className="Crightpart">
          <div className="rateCard">
            <div className="Subtotal">
              Subtotal {cartItems.length} :<b style={{marginLeft:'10px'}}>{`Rs ${a}`}</b> 
            </div>
            <div className="checkBox">
               <input type='checkbox'/>
               <div style={{fontFamily:'Poppins',fontSize:'14px'}}>This order contains a gift</div>
            </div>

            <div className="payButton">
                 Proceed To Pay
            </div>
          </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
export default Cart;





{/* <div className="Ccard">
<div className="Cimg-content">
  <img
    className="Cimage"
    src="https://m.media-amazon.com/images/I/710ZcpHUpkL._AC_UL480_FMwebp_QL65_.jpg"
  />

  <div className="Ccontent">
    "HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX
    3050 GPU, 15.6-inch (39.6 cm) FHD IPS 144Hz, 16GB DDR4, 512GB..."
  </div>
</div>

<div className="Crupees">Rs.49000</div>
</div> */}
