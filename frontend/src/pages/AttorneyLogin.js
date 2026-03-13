import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/adminLogin.css"; // Use same styling as admin login
import { API } from "../config/api";

const AttorneyLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("🔍 Sending login request:", {
        email: formData.email,
        passwordLength: formData.password.length
      });

      const res = await fetch(API.ATTORNEY_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          role: "Attorney" // Specify this is attorney login
        })
      });

      console.log("🔍 Response status:", res.status);
      
      const data = await res.json();
      console.log("🔍 Response data:", data);

      if (res.ok) {
        // Store all data
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "Attorney");
        localStorage.setItem("email", data.attorney.email);
        localStorage.setItem("name", data.attorney.name);
        localStorage.setItem("attorneyId", data.attorney.id);
        
        // Store complete attorney data for profile use
        localStorage.setItem("attorneyData", JSON.stringify(data.attorney));
        
        console.log("🔍 Stored in localStorage:", {
          token: data.token.substring(0, 20) + "...",
          role: "Attorney",
          email: data.attorney.email,
          name: data.attorney.name,
          attorneyId: data.attorney.id
        });
        
        console.log("🔍 Attorney data stored:", data.attorney);
        
        // Ensure attorney record exists in attorney table
        await ensureAttorneyRecord(data.attorney);
        
        setMessage("✅ Login successful! Redirecting to attorney panel...");
        
        // Immediate redirect
        console.log("🔍 Redirecting to attorney panel...");
        setTimeout(() => {
          navigate("/attorney/dashboard");
        }, 1000);
      } else {
        // Handle specific error messages
        let errorMessage = data.message || "❌ Login failed";
        if (data.message.includes("not found")) {
          errorMessage = "❌ Attorney not found. Please check your email.";
        } else if (data.message.includes("Invalid credentials")) {
          errorMessage = "❌ Invalid password. Please try again.";
        } else if (data.message.includes("Server error")) {
          errorMessage = "❌ Server error. Please try again later.";
        }
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      console.error("❌ Error type:", error.constructor.name);
      setMessage("❌ Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to ensure attorney record exists in attorney table
  const ensureAttorneyRecord = async (attorneyData) => {
    try {
      console.log("🔍 Ensuring attorney record exists in database...");
      
      // Check if attorney record exists by trying to fetch it
      const token = localStorage.getItem("token");
      const checkResponse = await fetch(`${API.BASE_URL}/attorney/check-record`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: attorneyData.email,
          attorneyId: attorneyData.id
        })
      });

      const checkResult = await checkResponse.json();
      console.log("🔍 Attorney record check result:", checkResult);

      if (!checkResult.exists) {
        console.log("🔍 Attorney record not found, creating it...");
        
        // Create attorney record in attorney table
        const createResponse = await fetch(`${API.BASE_URL}/attorney/create-record`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            attorneyId: attorneyData.id,
            name: attorneyData.name,
            email: attorneyData.email,
            phone: attorneyData.phone || "",
            gender: attorneyData.gender || "",
            qualification: attorneyData.qualification || "",
            joiningDate: attorneyData.joiningDate || new Date().toISOString().split('T')[0],
            attorneyCode: attorneyData.attorneyCode || "",
            role: "Attorney"
          })
        });

        const createResult = await createResponse.json();
        console.log("🔍 Attorney record creation result:", createResult);

        if (createResponse.ok) {
          console.log("✅ Attorney record created successfully in database");
        } else {
          console.error("❌ Failed to create attorney record:", createResult.message);
        }
      } else {
        console.log("✅ Attorney record already exists in database");
      }
    } catch (error) {
      console.error("❌ Error ensuring attorney record:", error);
      // Don't fail the login process, just log the error
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Attorney Login</h2>
          <p>Justice Point - Attorney Portal</p>
        </div>

        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-links">
            <a href="/attorney-forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="admin-login-btn" 
            disabled={loading}
          >
            {loading ? 'Please wait...' : 'Login'}
          </button>
        </form>

        <div className="register-link">
          Don't have an account? <Link to="/attorney/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default AttorneyLogin;
