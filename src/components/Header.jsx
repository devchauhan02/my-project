import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="food_img" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav_list">
          <li>Online{onlineStatus == false ? "🟢" : "🔴"}</li>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
