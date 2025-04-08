import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center pr-8 bg-gradient-to-r from-orange-100 via-pink-100 to-pink-200 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={LOGO_URL} alt="Food App Logo" className="w-20 h-20 object-contain" />
        <h1 className="text-xl font-semibold ml-2">FOOD DELIVERY</h1>
      </div>

      {/* Navigation */}
      <ul className="flex space-x-4.5 text-sm font-medium items-center">
        <li>
          Online Status: 
          <span className="ml-1">{onlineStatus ? "🟢" : "🔴"}</span>
        </li>
        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
        <li><Link to="/grocery" className="hover:text-green-600">Grocery</Link></li>
        <li><Link to="/cart" className="hover:text-green-600">Cart</Link></li>
        <li><Link to="/login" className="hover:text-green-600">Login</Link></li>
      </ul>
    </div>
  );
};

export default Header;
