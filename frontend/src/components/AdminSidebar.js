import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBalanceScale, FaTachometerAlt, FaCalendarAlt, FaUsers, FaUserTie, FaCogs, FaFlask, FaComments, FaCommentDots, FaSignOutAlt } from 'react-icons/fa';
import './adminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      
      // Redirect to home page
      navigate("/");
    }
  };

  return (
    <div className="admin-sidebar">
      <div className="logo">
        <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          <FaBalanceScale className="logo-icon" />
          <div className="logo-text-container">
            <span className="logo-text-main">Justice</span>
            <span className="logo-text-sub">Point</span>
          </div>
        </div>
        <h3 className="panel-text">Admin Panel</h3>
      </div>
      <ul className="menu">
        <li><Link to="/admin/dashboard"><FaTachometerAlt className="menu-icon" /> Dashboard</Link></li>
        <li><Link to="/admin/appointments"><FaCalendarAlt className="menu-icon" /> Appointments</Link></li>
        <li><Link to="/admin/users"><FaUsers className="menu-icon" /> Clients</Link></li>
        <li><Link to="/admin/doctors"><FaUserTie className="menu-icon" /> Attorneys</Link></li>
        <li><Link to="/admin/services"><FaCogs className="menu-icon" /> Services</Link></li>
        <li className="hidden-item"><Link to="/admin/lab-test-bookings"><FaFlask className="menu-icon" /> Lab Test Bookings</Link></li>
        <li className="hidden-item"><Link to="/admin/consultations"><FaComments className="menu-icon" /> Consultations</Link></li>
        <li><Link to="/admin/feedback"><FaCommentDots className="menu-icon" /> Feedback</Link></li>
        <li><button onClick={handleLogout} className="logout-btn"><FaSignOutAlt className="menu-icon" /> Logout</button></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
