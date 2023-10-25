import React, { useState, useEffect } from "react";
import "./Bestsellers.css";
import delivery from "../../images/expressDelivery.png";
import plus from "../../images/Plus.png";
import minus from "../../images/Minus.png";
import { useContext } from "react";
import { userContext } from "../Constants/Context";
import { Link, NavLink } from "react-router-dom";
import Courousal2 from "../Carousal/Courousal2";

function Bestsellers() {
  const [combodatas, setComboDatas] = useState([]);
  const mycombodata = useContext(userContext);
  const {
    itemCount,
    setItemCount,
    objCounts,
    setObjCounts,
    addItemHandler,
    deleteHandler,
    sellerId,
  } = useContext(userContext);

  useEffect(() => {
    if (mycombodata) {
      mycombodata && setComboDatas(mycombodata.combodata);
      console.log(objCounts);
    }
  });

  const contDecrementHandler = (combdata) => {
    // addItemHandler(combdata);
    const cartIncount =
      objCounts &&
      objCounts.map((incItem) => {
        if (incItem.id === combdata.id) {
          return {
            ...incItem,
            objCount: incItem.objCount - 1,
            total_Price: incItem.selling_price * (incItem.objCount - 1),
          };
        }
        console.log(incItem);
        setItemCount(incItem.objCount);
        return incItem;
      });
    setObjCounts(cartIncount);
  };

  const contIncrementHandler = (combdata) => {
    const exists = objCounts.some((item) => item.id === combdata.id);
    if (!exists) {
      addItemHandler(combdata);
    } else {
      const cartIncount =
        objCounts &&
        objCounts.map((incItem) => {
          if (incItem.id === combdata.id) {
            return {
              ...incItem,
              objCount: incItem.objCount + 1,
              total_Price: incItem.selling_price * (incItem.objCount + 1),
            };
          }
          console.log(incItem);
          setItemCount(incItem.objCount);
          return incItem;
        });
      setObjCounts(cartIncount);
    }
  };

  return (
    <>
    <Courousal2/>
    <div>
      <div className="bestSellerWrapper">
        {mycombodata &&
          combodatas.map((combdata) => (
            <>
              <div className="bestSellersContainer">
                <div className="bsellerprodImgContainer">
                  <img
                    src={`${process.env.PUBLIC_URL}/dataImages/${combdata.image}`}
                    alt=""
                    className="bstsellerImg"
                  />
                  <div className="addBtnContaner">
                    {objCounts.map((cartCout) =>
                      cartCout.id === combdata.id && cartCout.objCount > 1 ? (
                        <img
                          src={minus}
                          onClick={(e) => contDecrementHandler(combdata)}
                          alt=""
                          className="plusimg"
                        />
                      ) : cartCout.id === combdata.id &&
                        cartCout.objCount === 1 ? (
                        <button
                          className="close"
                          onClick={() => deleteHandler(combdata)}
                        >
                          x
                        </button>
                      ) : null
                    )}

                    {objCounts.map((cartCout) =>
                      cartCout.id === combdata.id ? (
                        <label className="Bstadditem">
                          {" "}
                          {cartCout.objCount}{" "}
                        </label>
                      ) : null
                    )}

                    <img
                      src={plus}
                      alt=""
                      onClick={() => contIncrementHandler(combdata)}
                      className="plusimg"
                    />
                  </div>
                </div>
                <h3 className="bstsellerPrdHead">
                  <NavLink className="myNav" to={`/details/${combdata.id}`}>
                    {combdata.comboitem}
                  </NavLink>
                </h3>

                <p className="BstproductQuanty">500gms | Serves 4</p>
                <div className="BstpriceContainer">
                  <h4 className="BstproductPrice">
                    ₹{combdata.selling_price}{" "}
                  </h4>
                  <h5 className="bstOldprice">₹${combdata.origianl_price}</h5>
                  <p className="bstsellO">${combdata.discounts}% off</p>
                </div>
                <div className="bsttodaysDealImgContainer">
                  <img src={delivery} alt="" className="bsttodaysdealimg" />
                  <p className="bstTodaysDeal">
                    Today in <b>90 min</b>
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
    </>
  );
}

export default Bestsellers;
