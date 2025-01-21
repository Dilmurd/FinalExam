import { useState } from "react";
import "./Header.scss"
import { MdOutlineClose } from "react-icons/md";
import logo from "../../assets/header.logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const header = ["Shop","On Sale","New Arrivals","Brands"]

function Header() {
  const [open,setClose] = useState(true)
  const handleClose = () => {
    setClose(false)
  }
  const collections = 
      header?.map((item,inx) => (
    <li className="navbar__item" key={inx}>
      <a href="#" className="navbar__link">
        <span>{item}</span>
      </a>
    </li>

))
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};
  return (
    <div className="main">
      {
        open && (
    <div className="top">
        <p>Sign up and get 20% off to your first order. Sign Up Now</p>
        <button title="btn" onClick={handleClose}>
        <MdOutlineClose/>
        </button>
    </div>
        )
      }
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
          <div className="burger" onClick={toggleMenu}></div>
            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="close-button" onClick={toggleMenu}>&times;</div>
                <div className="menu-item">Shop</div>
                <div className="menu-item">On Sale</div>
                <div className="menu-item">New Arrivals</div>
                <div className="menu-item">Brands</div>
            </div>
            <NavLink to={"/"}>
            <img src={logo} alt="SHOP.CO" />
            </NavLink>
            <ul className="navbar__collection">
              {collections}
              </ul>
          </div>
          <div className="navbar__input">
            <CiSearch/>
            <input type="search" placeholder="Search for products..." />
          </div>
          <div className="navbar__icons">
            <div className="navbar__icon">
            <FaSearch/>
            </div>
            <NavLink to={"/cart"}>
            <MdOutlineShoppingCart/>
            </NavLink>
            <FaRegUserCircle/>
          </div>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header; 