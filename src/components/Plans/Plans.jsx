import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/images/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      {/* //program header */}
      <div className="programs-header " style={{gap:"2rem"}}>
        <span className="strock-text">Ready to start</span>
        <span>your journey</span>
        <span className="strock-text">now withus</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, id) => (
          <div className="plan" key={id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={id}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits --></span>
            </div>

            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
