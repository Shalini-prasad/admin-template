import React from "react";
import "./LoginImg.scss";
// import SignIn from "../../pages/Pages/SignIn/SignIn";
import websitelogo from "../../assets/images/SupeHub Logo.png";
import logo1 from "../../assets/images/Shopify.png";
import logo2 from "../../assets/images/Slack.png";
import logo3 from "../../assets/images/Asana.png";
import logo4 from "../../assets/images/Gusto.png";
import logo5 from "../../assets/images/Spotify.png";

function LoginImg() {
  const data = [
    {
      id: 1,
      img: logo1,
      className: "logo1",
    },
    {
      id: 2,
      img: logo2,
      className: "logo2",
    },
    {
      id: 3,
      img: logo3,
      className: "logo3",
    },
    {
      id: 4,
      img: logo4,
      className: "logo4",
    },
    {
      id: 5,
      img: logo5,
      className: "logo5",
    },
  ];
  return (
    <div className="login-image">
      <div className="login-content">
        <div className="website-logo">
          <img src={websitelogo} alt="website logo" />
        </div>
        <div className="logo-wrapper">
          <p>Truth by 100+ company</p>
          <div className="logos">
            {data.map(({ id, img, className }) => (
              <div key={id} className={`logo ${className}`}>
                <img src={img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginImg;
