import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBalanceScale, FaHome, FaTachometerAlt, FaUserCircle, FaCalendarAlt, FaFlask, FaComments, FaCommentDots, FaSignOutAlt } from "react-icons/fa";
import "./patientSidebar.css";
import { useAuth } from "../context/AuthContext";

const ClientSidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="patient-sidebar">
      <div className="sidebar-menu">
        <div className="logo">
          <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
            <FaBalanceScale className="logo-icon" />
            <div className="logo-text-container">
              <span className="logo-text-main">Justice</span>
              <span className="logo-text-sub">Point</span>
            </div>
          </div>
          <h3 className="panel-text">Client Panel</h3>
        </div>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaHome className="menu-icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/client/dashboard" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaTachometerAlt className="menu-icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/client/profile" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaUserCircle className="menu-icon" /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/client/appointments" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaCalendarAlt className="menu-icon" /> Appointments
            </NavLink>
          </li>
          <li className="hidden-item">
            <NavLink 
              to="/client/lab-tests" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaFlask className="menu-icon" /> Lab Tests
            </NavLink>
          </li>
          <li className="hidden-item">
            <NavLink 
              to="/client/consultation" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaComments className="menu-icon" /> Online Consultation
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/client/feedback" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaCommentDots className="menu-icon" /> Feedback
            </NavLink>
          </li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}><FaSignOutAlt className="menu-icon" /> Logout</button>
      </div>
    </div>
  );
};

export default ClientSidebar;

