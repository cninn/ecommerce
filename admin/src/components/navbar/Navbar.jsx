import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";


const Navbar = () => {


  return (
    <div className="admin-navbar">
      <img className="nav-logo" src={navlogo} alt="adminnavlogo" />
      <img
   
        className="nav-profile"
        src={navProfile}
        alt="profile"
      />
    </div>
  );
};

export default Navbar;
