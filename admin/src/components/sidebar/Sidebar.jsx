import "./Sidebar.css";
import { Link } from "react-router-dom";
import addProduct from "../../assets/Product_Cart.svg";
import viewProduct from "../../assets/Product_list_icon.svg";
import {  useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

 

  const toggleHandler = () => {
    setOpen(!open);
    console.log('click')
  };

  return (
    <>
      <button className="toggleBtn" onClick={toggleHandler}></button>
      <div className={!open ? "sidebar" : "open-sidebar"}>
        <Link onClick={() => setOpen(!open)} to={"/api/product/addproduct"}>
          <div className="sidebar-item">
            <img src={addProduct} alt="..." />
            <span>Add Product</span>
          </div>
        </Link>
        <Link onClick={() => setOpen(!open)} to={"/api/product"}>
          <div className="sidebar-item">
            <img src={viewProduct} alt="..." />
            <span>View Products</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
