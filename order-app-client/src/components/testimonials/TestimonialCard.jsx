import React from "react";
import "./testimonial-card.css";
import { Rating } from "@mui/material";

const TestimonialCard = () => {
  return (
    <div className="main-testimonial">
      <div className="testimonial-profile">
        <div className="testimonial-avatar">
          <img
            src="https://templates.essaywpthemes.com/se/wp-content/uploads/sites/11/2022/07/1901138.jpg"
            alt="testimonial-avatar"
          />
        </div>
        <div className="testimonial-rating">
          <div>
            <p>Jassie, MA</p>
          </div>
          <Rating value={4.5} />
          <span>Legal, Ethical & Safety Issues in HIT</span>
        </div>
      </div>
      <div className="testimonial-statement">
        I had huge problems with my dissertation, especially with the Results
        Section. This is why I decided that a professional writer had to work on
        my dissertation. The result was simply outstanding, and I truly believe
        that Results is the best chapter in my dissertation.
      </div>
    </div>
  );
};

export default TestimonialCard;
