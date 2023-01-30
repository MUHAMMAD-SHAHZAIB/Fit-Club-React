import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import { useState } from "react";
import RightArrow from "../../assets/images/rightArrow.png";

const Programs = () => {
  const [programData, setProgtamsData] = useState(programsData);

  return (
    <div className="Programs" id="programs">
      {/* header of program */}
      <div className="programs-header">
        <span className="strock-text">Explore Our</span>
        <span>Programs</span>
        <span className="strock-text">to shape you</span>
      </div>

      {/* program-cards data render */}
      <div className="program-categories">
        {programData.map(program => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
