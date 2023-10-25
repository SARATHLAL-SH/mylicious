import React, { useEffect } from "react";
import crslImg1 from "../../../src/images/carousalimg1.webp";
import crslImg2 from "../../../src/images/carosalImg2.webp";
import crslImg3 from "../../../src/images/carousalImg3.webp";
import crslImg4 from "../../../src/images/corousalImg5.webp";
import crslImg5 from "../../../src/images/coursalImg4.webp";
import { useNavigate } from "react-router-dom";
import "./Carousal2.css";

function Courousal2() {
    const navigator = useNavigate();
    const onClickHandler=()=>{
        navigator('/')
    }
//   useEffect(() => {
//     const subgal = document.querySelector(".gallery");
//     const swidth = subgal.scrollWidth;
//     console.log(swidth);
//     let scrollAmount = 1;
//     const scrollGallery = () => {
//       subgal.scrollLeft += scrollAmount;
      
//       if (subgal.scrollLeft >= swidth) {
//         subgal.scrollLeft = swidth;
//       }
//     };

//     const scrollInterval = setInterval(scrollGallery, 2);
//     return () => {
//     scrollGallery();
//     };
//   }, []);
  return (
    <div className="crsl2Wrapper">
        <button className="btnHome" onClick={onClickHandler}>Home</button>
      <div className="gallery">
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img" src={crslImg2} />
          </span>
        </div>
        <div className="imgSubContianer">
          {" "}
          <span>
            <img className="crsl2Img" src={crslImg3} />
          </span>
        </div>
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img" src={crslImg4} />
          </span>
        </div>
        <div className="imgSubContianer">
          {" "}
          <span>
            <img className="crsl2Img" src={crslImg5} />
          </span>
        </div>
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img" src={crslImg2} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courousal2;
