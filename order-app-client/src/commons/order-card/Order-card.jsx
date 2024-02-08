import React from "react";
import "./order-card.css";

const OrderCard = () => {

  return (
    <div className="order-card-container">
      <p className="order-card-title">Calculate order price</p>
      <form>
        <div>
          <select name="level">
            <option value="level">High School</option>
            <option value="level">High School</option>
            <option value="level">High School</option>
          </select>
        </div>
        <div>
          <select name="service">
            <option value="service">Writing</option>
          </select>
        </div>
        <div>
          <select name="subject">
            <option value="subject">Accounting</option>
          </select>
        </div>
        <div>
          <select name="order-type">
            <option value="level">Essay</option>
          </select>
        </div>
        <div className="order-card-price">
          <p>Price (USD)</p>
          <p>$ 40</p>
        </div>
        <div>
          <button className="order-card-button">ORDER NOW</button>
        </div>
      </form>
    </div>
  );
};

export default OrderCard;
