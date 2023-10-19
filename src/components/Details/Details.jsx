import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import { useContext } from "react";
import { userContext } from "../Constants/Context";

function Details() {
  const { combodata, addItemHandler, cartArr, alldata } =
    useContext(userContext);
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [filterData, setFilterData] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [description, setDescription] = useState();
  const [addedCartDes, setAddedCartDes] = useState();
  const obj = useParams();
  const navigate = useNavigate();
  const [addarray, setAddarray] = useState([]);

  const cartHandler = (filterData) => {
    addItemHandler(filterData);
    if (
      addarray &&
      addarray.some((cartitem) => cartitem.id === parseInt(obj.id))
    ) {
      setAddedCartDes("");
      navigate("/bestsellers");
    } else {
      setAddedCartDes("Your Item Added to Cart");
      setTimeout(() => {
        navigate("/bestsellers");
      }, 2000);
    }
  };
  const PrevHandler = () => {
    navigate("/");
  };
  useEffect(() => {
    const myData = alldata && alldata.find((mydatas) => mydatas.id == obj.id);
    if (myData) {
      setItem(myData.comboitem);
      setImage(myData.image);
      setFilterData(myData);
      setSellingPrice(myData.selling_price);
      setDescription(myData.comno_description);
    }
  });
  useEffect(() => {
    cartArr &&
      cartArr.map((arr) => {
        setAddarray(arr);
      });
  }, [cartArr]);

  console.log(addarray);
  console.log(
    addarray && addarray.some((cartitem) => cartitem.id === parseInt(obj.id))
  );

  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const extraContent = (
    <div className="readMore">
      <p className="DetailsDesc">
        seasonings, batter-dipped and rolled in a panko breadcrumbs to create
        this crispy on the outside, juicy on the inside indulgent meaty treat.
        Quick yet wholesome snack for kids, get-togethers or house parties, they
        have no artificial preservatives and made with fresh chicken tenders.
        Bring the nostalgia of old Kolkata home with our ready-to-fry Crispy
        Fish Fingers. Boneless basa pieces marinated in quintessential Bengali
        flavours such as kasundi mustard, red chilli, ginger, garlic and gram
        flour and then coated in panko crumbs. Golden brown when fried, serve
        with your favourite dip or Kasundi mustard for a crispy mid-day snack
        for kids and adults alike. Pair them with slaw or salad on the side.
        Still craving more crispy treats? That's why we've added our Crispy
        Chicken Wings that can be cooked in minutes. Marinated in hot chilli
        seasoning, fresh chicken wings are coated in batter & covered in panko
        bread crumbs. This means that all you have to do is to deep-fry these
        wings & it's ready in 8 minutes! Have the crispy, juicy wings with a
        squeeze of lime or paired with your favourite condiment as a meal or an
        evening snack. Crispy Chicken Supreme - FSSAI Category: 8.2.1: Marinated
        Meat Crispy Fish Fingers - FSSAI Category 8.2.1 Non-heat treated
        processed meat and poultry products in whole pieces or cuts. Crispy
        Chicken Wings - Note: Store in your fridge, do not freeze. Consume
        within 4 days of shelf life. FSSAI Category: 8.2.1 - Marinated Meat
      </p>
    </div>
  );

  return (
    <div>
      <div className="DetailsContainer">
        <div className="detailsHeadContainer">
          <div className="detailsImgContainer">
            <img
              src={`${process.env.PUBLIC_URL}/dataImages/${image}`}
              alt=""
              className="detailsImg"
            />
          </div>
          <div className="detailsDescContainer">
            <div>
            <h2 className="DetaislHead">{item}</h2>
            <div className="detaisPriceContainer">
              <p className="DetailsDesc">{description}</p>
              {readMore && extraContent}

              <a
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <h2>{linkName}</h2>
              </a> </div></div>
              <div className="detaisPriceContainer2">
                <h2 className="detialsPrice">₹{sellingPrice}</h2>
                <button
                  className="detailsAddBtn"
                  onClick={(e) => cartHandler(filterData)}
                >
                  {addarray &&
                  addarray.some((cartitem) => cartitem.id === parseInt(obj.id))
                    ? "Go to Back"
                    : "Add + "}
                </button>
                <br />

                {/* <button onClick={cartHandler}> Cart</button>
                <button onClick={PrevHandler}> back</button> */}
              </div>
              </div>
              <div>
                <h1 className="addedItemDes">{addedCartDes}</h1>
              </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default Details;
