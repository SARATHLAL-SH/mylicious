import React, { useContext } from "react";
import { userContext } from "../Constants/Context";
import "./Shop.css";
import { NavLink, useNavigate } from "react-router-dom";
import Carousal from "../Carousal/Carousal";

function Shop() {
  const { datas, combodata,sellerId,setSellerId } = useContext(userContext);
const navigate = useNavigate();
  const onClickHandler =(item)=>{
setSellerId(item.id);
    {navigate("/bestsellers")} ;
  }
  return (
    <div className="shopWrapper">
      <Carousal/>
      <div className="shopContainer">
        {datas &&
          datas.map((item) => (
            <div onClick={()=>onClickHandler(item)} className="shopImgContainer">
             <img
                src={`${process.env.PUBLIC_URL}/dataImages/${item.image}`}
                alt=""
                className="shopImg"
              />
              <p className="shopItem">{item.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shop;
