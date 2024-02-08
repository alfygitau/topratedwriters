import React, { useState } from "react";
import "./landing.css";
import Rating from "@mui/material/Rating";
import OrderCard from "../../commons/order-card/Order-card";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TestimonialCard from "../../components/testimonials/TestimonialCard";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ServiceAccordion from "../../commons/service-accordion/service-accordion";

const Landing = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="main-landing-container">
      <div className="main-landing">
        <div className="landing-content">
          {/* left side */}
          <div className="home-screen-content">
            <div>
              <h2 className="hero-title">
                Top custom writing service with 3-hour delivery
              </h2>
            </div>
            <div>
              <span className="statement">
                High-quality papers from professional writers since 2006. Place
                an order in 5 mins!
              </span>
            </div>
            <div className="rating">
              <div className="rate">
                <div className="rater">
                  <span>trustpilot</span>
                  <Rating name="simple-controlled" value={4} />
                </div>
                <span className="rating-value">4.5</span>
              </div>
              <div className="rate">
                <div className="rater">
                  <span>review.io</span>
                  <Rating name="simple-controlled" value={4} />
                </div>
                <span className="rating-value">4.9</span>
              </div>
              <div className="rate">
                <div className="rater">
                  <span>sitejabber</span>
                  <Rating name="simple-controlled" value={4} />
                </div>
                <span className="rating-value">4.8</span>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="home-order-card">
            <OrderCard />
          </div>
        </div>
      </div>
      <div className="services-provided">
        <div className="services-provided-content">
          <div className="main-service-delivery">
            <span>
              <CheckCircleOutlineOutlinedIcon />
            </span>
            <div className="service-delivery">
              <p>3-hour delivery</p>
              <span>
                Get a top-quality custom essay in no time! We can perform
                professional writing services even with the tightest deadlines.
              </span>
            </div>
          </div>
          <div className="main-service-delivery">
            <span>
              <CheckCircleOutlineOutlinedIcon />
            </span>
            <div className="service-delivery">
              <p>Plagiarism-free papers</p>
              <span>
                Completely original work. Custom Writing experts use advanced
                software to make sure your papers are 100% plagiarism-free!
              </span>
            </div>
          </div>
          <div className="main-service-delivery">
            <span className="service-provided-icon">
              <CheckCircleOutlineOutlinedIcon />
            </span>
            <div className="service-delivery">
              <p>3-hour delivery</p>
              <span>
                We’re the custom writing company you can trust! If you’re not
                completely satisfied with your paper, you’ll get a full refund.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-screen-stats">
        <div className="client-stats">
          <p className="client-stats-statement">
            For over 15 years we’ve helped thousands of students improve their
            grades
          </p>
          <div className="writers-stats">
            <div className="stats">
              <span className="clients">46, 773</span>
              <span className="clients-statement">Satisfied clients</span>
            </div>
            <div className="stats">
              <span className="clients">327,411</span>
              <span className="clients-statement">Completed assignments</span>
            </div>
            <div className="stats">
              <span className="clients">1,092</span>
              <span className="clients-statement">Qualified writers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-home-screen-testimonial">
        <h3>Testimonials</h3>
        <div className="home-screen-testimonial">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      <div className="main-top-writing-services">
        <h3>Top writing services to help with your studies</h3>
        <div className="top-writing-services">
          <div className="writing-type-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
