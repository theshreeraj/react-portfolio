import React from "react";
import "./css/Hero.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.webp";
import node from "../assets/node.webp";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";

import react from "../assets/react.svg";

const Hero = () => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={html}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={css}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={javascript}
              //   should be js img
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={css}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={node}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={mongodb}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={nextjs}
              alt="html"
            />
          </li>
          <li>
            <img
              style={{ width: "80px", height: "auto" }}
              src={node}
              alt="html"
            />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
