import Login from "../../pages/Login/Login";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleButtonClick = (destination) => {
    navigate(destination);
  };

  return (
    <div className="navbar">
      
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Personal Finance Manager</span>
      </div>
      
      <div className="navigation">
        <button onClick={() => handleButtonClick('/login')}>Login</button>
        <button onClick={() => handleButtonClick('/register')}>Register</button>
      
      </div>
    
    </div>
  );
};

export default Navbar;