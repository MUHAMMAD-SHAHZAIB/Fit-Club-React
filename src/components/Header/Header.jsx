import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import Bars from "../../assets/images/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className="header">
        <img src={Logo} alt="" className="logo" />

        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                to="home"
                span={true}
                smooth={true}
                activeClass="active"
                onClick={() => setMenuOpened(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                span={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="Reasons"
                span={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="plans"
                span={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonils"
                span={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
