import React from "react";
import BuyPress from "./Assets/PressMachine.png";
import BuyOils from "./Assets/BuyOils.png";
import BuyCake from "./Assets/BuyCake.png";
import ArrowLink from "./Assets/ArrowLink.png";
import { Link } from "react-router-dom";

const OurProduction = () => {
  return (
    <div className="Container">
      <div className="Our-Production-Head-Text">
        <h1>Наше Производство</h1>
      </div>
      <div className="The-Path-To-The-Products">
        <div className="The-Path-To-The-Products-Press">
          <img src={BuyPress} alt="#" />
          <Link to={'/Equipment'} className="Path-Products-Link-To-Press">
            <span>купить оборудование</span> <img src={ArrowLink} alt="#" />
          </Link>
        </div>
        <div className="The-Path-To-The-Products-Oils">
          <img src={BuyOils} alt="#" />
          <Link to={"/Oils"} className="Path-Products-Link-To-Oils" >
            <span>купить масла</span> <img src={ArrowLink} alt="#" />
          </Link>
        </div>
        <div className="The-Path-To-The-Products-Cake">
          <img src={BuyCake} alt="#" />
          <Link to={"/Cake"} className="Path-Products-Link-To-Cake">
            <span>купить жмых</span> <img src={ArrowLink} alt="#" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProduction;
