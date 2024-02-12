import LogoFooter from "../image/LogoFooter.png";
import Instagram from "../image/instagram.png";
import Youtube from "../image/youtube.png";
import Facebook from "../image/facebook.png";
import Linkedin from "../image/linkedin.png";
import Pinterest from "../image/pinterest.png";
import Twitter from "../image/twitter.png";

export default function SectionFooter() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-3">
          <img src={LogoFooter}></img>
        </div>
        <div className="col-3 ">
          <ul className="li-group ">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">TECHNOLOGIES</a>
            </li>
            <li>
              <a href="#">HOW TO</a>
            </li>
            <li>
              <a href="#">JOIN HYDRA</a>
            </li>
          </ul>
        </div>
        <div className="col-3 ">
          <ul className="li-group">
            <li>
              <a href="#">F.A.Q</a>
            </li>
            <li>
              <a href="#">SITEMAP</a>
            </li>
            <li>
              <a href="#">CONDITIONS</a>
            </li>
            <li>
              <a href="#">LICENSES</a>
            </li>
          </ul>
        </div>
        <div className="col-3 d-flex justify-content-between flex-column">
          <p className="text-p-footer">SOCIALIZE WITH HYDRA</p>
          <div className="link-social">
            <a href="#">
              <img src={Instagram}></img>
            </a>
            <a href="#">
              <img src={Youtube}></img>
            </a>
            <a href="#">
              <img src={Facebook}></img>
            </a>
            <a href="#">
              <img src={Linkedin}></img>
            </a>
            <a href="#">
              <img src={Pinterest}></img>
            </a>
            <a href="#">
              <img src={Twitter}></img>
            </a>
          </div>
          <button className="btn-footer">BUILD YOUR WORLD</button>
        </div>
      </div>
      <div className="footer-end-text">
        <h6>
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
        </h6>
      </div>
    </div>
  );
}
