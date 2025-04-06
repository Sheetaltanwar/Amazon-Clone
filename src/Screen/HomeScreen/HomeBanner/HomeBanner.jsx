import React from "react";
import "./HomeBanner.css";
import homeBannerItemProdunct from "../../../homeProduct.json";
export const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBanImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg"
      />
      <div className="grayBgHomeBan"></div>

      <div className="homeBanItemDiv">
        {homeBannerItemProdunct.product.map((items, idx) => (
          <div className="homeBanItemDivCard">
            <div className="homeBanItemDivCardTitle">
              {items.itemTitle}
            </div>

            <div className="img-Bigcontainer">
              { items.imgs.map((it,ind)=>{
                return (
                  <div className="img-smallcontainer">
                  <img
                    className="image" style={{heigth:'100px',width:'120px'}}
                    src={it}
                  />
                  <div className="img-content">Air Conditioners</div>
                </div>
                )
              })}
            
            </div>
          <div className="seemore"> see more</div>

          </div>
        ))}
      </div>
    </div>
  );
};
