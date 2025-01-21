import "./Footer.scss";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import visa from "../../assets/visa.png"
import pay from "../../assets/pay.png"
import apple from "../../assets/apple.png"
import google from "../../assets/google.png"
import master from "../../assets/master.png"
import { useMemo } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logos">
            <p className="footer__logo">SHOP.CO</p>
            <p className="footer__desc">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="footer__icons">
              <AiFillTwitterCircle />
              <RiFacebookCircleFill />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>
          <ul className="footer__collection">
            <li className="footer__item">Company</li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Features</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Works</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Career</span>
              </a>
            </li>
          </ul>
          <ul className="footer__collection">
            <li className="footer__item">Help</li>
            <li>
              <a href="#">
                <span>Customer Support</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Delivery Details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Terms & Conditions</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Privacy Policy</span>
              </a>
            </li>
          </ul>
          <ul className="footer__collection">
            <li className="footer__item">FAQ</li>
            <li>
              <a href="#">
                <span>Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Manage Deliveries</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Payments</span>
              </a>
            </li>
          </ul>
          <ul className="footer__collection">
            <li className="footer__item">RESOURCES</li>
            <li>
              <a href="#">
                <span>Free eBooks</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Development Tutorial</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>How to - Blog</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Youtube Playlist</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__cards">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="cards">
                <img src={visa} alt="" />
                <img src={master} alt="" />
                <img src={pay} alt="" />
                <img src={apple} alt="" />
                <img src={google} alt="" />
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
