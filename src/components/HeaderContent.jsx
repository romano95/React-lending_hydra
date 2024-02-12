import Logo from "../image/Logo.png";
import TextHydra from "../image/TextHydra.png";
import BurgerBtn from "../image/Hamburger-Button.png";
import Close from "../image/back.png";
import { useState } from "react";
import { Flex } from "antd";

export default function HeaderContent() {
  return (
    <div className="d-flex container justify-content-between align-items-center">
      <div>
        <img src={Logo} className="logo-img"></img>
        <img src={TextHydra}></img>
      </div>

      <div className="section-nav ">
        <ul class="nav justify-content-center">
          <li className="nav-item">
            <a class="nav-link" href="#" className="text-nav">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" className="text-nav">
              SERVICES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" className="text-nav">
              TECHNOLOGIES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" className="text-nav">
              HOW
            </a>
          </li>
        </ul>
      </div>

      <div className="btn-section">
        <button className="contact-us">CONTACT US</button>
        <button className="join-hydra">JOIN HYDRA</button>
      </div>
    </div>
  );
}
