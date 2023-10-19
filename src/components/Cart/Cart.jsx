import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import { userContext } from "../Constants/Context";
import { useNavigate } from "react-router-dom";
import removebtn from "../../images/delete.png";

function Cart() {
  const [item, setItems] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

  const navigate = useNavigate();
  const {
    combodata,
    count,
    setCount,
    cartarrayData,
    objCounts,
    setObjCounts,
    itemCount,
    setItemCount,
    deleteHandler,
    cartArr,
    isCartOpen,
    setIsCartOpen,
    toggleCart,
  } = useContext(userContext);
  // const [itemCount, setItemCount] = useState();
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    combodata && setItems(combodata);
    combodata.map((myItem) => {
      setPrice(myItem.selling_price);
      setDiscount(myItem.discount);
    });
  }, [deleteHandler, objCounts]);

  const contDecrementHandler = (cartItems) => {
    const cartIncount =
      objCounts &&
      objCounts.map((incItem) => {
        if (incItem.id === cartItems.id) {
          return {
            ...incItem,
            objCount: incItem.objCount - 1,
            total_Price: incItem.selling_price * (incItem.objCount - 1),
          };
        }
        // setItemCount(incItem.objCount);
        return incItem;
      });

    setObjCounts(cartIncount);
  };
  const contIncrementHandler = (cartItems) => {
    const cartIncount =
      objCounts &&
      objCounts.map((incItem) => {
        if (incItem.id === cartItems.id) {
          return {
            ...incItem,
            objCount: incItem.objCount + 1,
            total_Price: incItem.selling_price * (incItem.objCount + 1),
          };
        }

        setItemCount(incItem.objCount);
        return incItem;
      });

    setObjCounts(cartIncount);
  };
  useEffect(() => {
    const subTotal = objCounts.reduce(
      (total, item) => total + item.total_Price,
      0
    );
    setCartTotal(subTotal);
  });
  return (
    <div>
      <div className="popupcloseContainer" onClick={toggleCart}>
        {" "}
        <button className="popupClose">X</button>
      </div>
      <div className="cartContainer">
        <h1 className="cartHead">Order Summary</h1>
        <div className="delChargeContainer">
          <h4 className="delChargeDesc">
            {cartTotal < 499
              ? "Your cart value is less than ₹499 & delivery charge applies"
              : "Congratulations, Your delivery charge is waived off!!!"}
          </h4>
        </div>
        <div className="discountsDescContainer">
          <h4 className="discountDesc">
            {objCounts.length > 0
              ? "Congratulations! You've saved ₹14"
              : "Your Cart is Empty"}
          </h4>
        </div>
        {cartarrayData.map((cartItems, index) => (
          <div className="itemDetailContainer">
            <div className="itemLeft">
              <div className="itemNumberContainer">
                <div className="itemNumber">{index + 1}</div>
              </div>
              <div>
                <h3 className="itemsDesc">{cartItems.comboitem}</h3>
              </div>
              <div
                className="removebtn"
                onClick={() => deleteHandler(cartItems)}
              >
                <img className="remove" src={removebtn} alt="" />
              </div>
            </div>
            <div className="cartItemDetails">
              <div className="itemsubDesc">
                <button>{cartItems.quantity}</button>
                <h4 className="itemSellingPrice">${cartItems.selling_price}</h4>
                <h4 className="itemActualPrice">${cartItems.origianl_price}</h4>
              </div>
              <div className="removeAddContainer">
                <img src="" alt="" className="removeBtn" />

                {objCounts.map((checkCount) =>
                  cartItems.id === checkCount.id && checkCount.objCount > 1
                    ? checkCount.objCount > 0 && (
                        <button
                          value={count}
                          onClick={(e) => contDecrementHandler(cartItems)}
                          className="removedereaseItem"
                        >
                          -
                        </button>
                      )
                    : null
                )}

                {objCounts &&
                  objCounts.map((checkCount) =>
                    cartItems.id === checkCount.id ? (
                      <h4 className="cartItemCount">{checkCount.objCount}</h4>
                    ) : null
                  )}

                <button
                  className="addItems"
                  value={count}
                  onClick={(e) => contIncrementHandler(cartItems)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="billDetailsContainer">
          <h2 className="BillHead">Bill Details</h2>
          <table>
            <tr>
              <td>Subtotal</td>

              <td>{cartTotal}</td>
            </tr>
            <tr className="rowDelery">
              <td>Delivery Charge</td>
              <td>
                {cartTotal > 499
                  ? 0
                  : cartTotal >= 1 && cartTotal <= 499
                  ? 39
                  : null}
              </td>
            </tr>
            <tr className="rowCharge">
              <td>
                {cartTotal < 499
                  ? "Your cart value is less than ₹499 & delivery charge applies"
                  : "Congratulations, Your delivery charge is waived off!!!"}
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                ₹
                {cartTotal > 499
                  ? cartTotal + 0
                  : cartTotal >= 1 && cartTotal <= 499
                  ? cartTotal + 39
                  : 0}
              </td>
            </tr>
          </table>
        </div>
        <div className="totalHeadContainer">
          <div className="TotalContainer">
            <h3 className="CartT">Total</h3>
          </div>
          <div className="cartCheckoutContainer">
            <h4 className="cartCheckout">Proceed to Checkout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
