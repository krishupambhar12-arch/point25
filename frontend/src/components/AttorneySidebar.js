import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBalanceScale, FaHome, FaTachometerAlt, FaUserCircle, FaCalendarAlt, FaComments, FaSignOutAlt } from "react-icons/fa";
import "./doctorSidebar.css";
import "../utils/apiInterceptor"; // Import global API interceptor
import { useAuth } from "../context/AuthContext";

const AttorneySidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="doctor-sidebar">
      <div className="logo">
        <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          <FaBalanceScale className="logo-icon" />
          <div className="logo-text-container">
            <span className="logo-text-main">Justice</span>
            <span className="logo-text-sub">Point</span>
          </div>
        </div>
        <h3 className="panel-text">Attorney Panel</h3>
      </div>
      <ul className="menu">
        <li><Link to="/"><FaHome className="menu-icon" /> Home</Link></li>
        <li><Link to="/attorney/dashboard"><FaTachometerAlt className="menu-icon" /> Dashboard</Link></li>
        <li><Link to="/attorney/profile"><FaUserCircle className="menu-icon" /> Profile</Link></li>
        <li><Link to="/attorney/appointments"><FaCalendarAlt className="menu-icon" /> Appointments</Link></li>
        <li className="hidden-item"><Link to="/attorney/consultation"><FaComments className="menu-icon" /> Consultations</Link></li>
        <li><button onClick={handleLogout} className="logout-btn"><FaSignOutAlt className="menu-icon" /> Logout</button></li>
      </ul>
    </div>
  );
};

export default AttorneySidebar;


