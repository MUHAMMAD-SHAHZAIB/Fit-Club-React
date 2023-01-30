import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
const Join = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("Your_Service_Id", "temlate", form.current, "user_id")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="strock-text">Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="strock-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form onSubmit={sendEmail} ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
