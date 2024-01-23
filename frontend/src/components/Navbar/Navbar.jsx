import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import menu from "../Assets/menu.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const menuRef = useRef(null);
  const touchStartY = useRef(null);
  const [menuOffset, setMenuOffset] = useState(0);
  




  const handleTouchStart = (e) => {
    e.preventDefault();
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
 

    const touchEndY = e.touches[0].clientY;
    const touchDistance = touchEndY - touchStartY.current;

    if (touchDistance > 200) {
      handleMenuClose();
    } else {
      setMenuOffset(touchDistance);
    }
    e.preventDefault();
  };

  const handleMenuClose = () => {
    menuRef.current.classList.remove("show");
    setMenuOffset(0);
  };

  const toggleMenu = () => {
   
    menuRef.current.classList.toggle("show");
  };



  const listItems = [
    { id: 1, text: "Shop", link: "/" },
    { id: 2, text: "Men", link: "/mens" },
    { id: 3, text: "Women", link: "/womens" },
    { id: 4, text: "Kids", link: "/kids" },
  ];

  const handleItemClick = (index) => {
    window.scrollTo(0, 0)
    setActiveIndex(index);
    handleMenuClose();  
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo-is-here" />
        <h1>SHOPPER</h1>
      </div>

      <div onClick={toggleMenu} className="menuContainer">
        <img className="menuLogo" src={menu} alt="menu" />
        <span>MENU</span>
      </div>
    
      <ul
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         style={{ transform: `translateY(${menuOffset}px)` }}
       ref={menuRef} className="nav-menu">
        {listItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)} className={item.id === activeIndex ? "nav-active" : ""}>
            
            <Link to={item.link}>
              {item.text}
            </Link>
          </li>
        ))}
        
        <li className="query-login">
          {/* //! BURADA BİR TIKLAMA OPERASYONU GEREKECEK */}
          <Link  to="/login">
            <button className="button">
              Login
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </li>

        <div 
        onClick={handleMenuClose }
      className="closeMenu">
      <i className="fa-solid fa-circle-chevron-down"></i>
      </div>
      </ul>
      <div className="nav-login-card">
        <Link to="/login">
          <button className="button">
            Login
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="card-icon" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


