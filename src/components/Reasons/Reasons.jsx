import React from "react";
import "./Reasons.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import tick from "../../assets/images/tick.png";
import nb from "../../assets/images/nb.png";
import adidas from "../../assets/images/adidas.png";
import nike from "../../assets/images/nike.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      {/* left-side-reasons */}
      <div className="left-reasons">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      {/* Right-side-reasons */}
      <div className="right-reasons">
        <span>some resons</span>

        <div className="">
          <span className="strock-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-right">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smater and faster than before</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>realise partnter</span>
          </div>
        </div>

        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          Our partners
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
