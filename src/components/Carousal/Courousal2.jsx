import React  from "react";
 alt="" 
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

  return (
    <div className="crsl2Wrapper">
        <button className="btnHome" onClick={onClickHandler}>Home</button>
      <div className="gallery">
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img" alt=""  src={crslImg2} />
          </span>
        </div>
        <div className="imgSubContianer">
          {" "}
          <span>
            <img className="crsl2Img" alt=""  src={crslImg3} />
          </span>
        </div>
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img"  alt="" src={crslImg4} />
          </span>
        </div>
        <div className="imgSubContianer">
          {" "}
          <span>
            <img className="crsl2Img" alt=""  src={crslImg5} />
          </span>
        </div>
        <div className="imgSubContianer">
          <span>
            <img className="crsl2Img" alt=""  src={crslImg2} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courousal2;
