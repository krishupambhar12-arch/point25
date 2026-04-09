// src/pages/DoctorDashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/AttorneySidebar";
import "../styles/doctorDashboard.css";
import { API } from "../config/api";

const AttorneyDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attorney, setAttorney] = useState(null);
  const [todayAppointments, setTodayAppointments] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      try {
        const res = await fetch(API.ATTORNEY_DASHBOARD, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        // Check if response is JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await res.text();
          console.error('Received non-JSON response:', text);
          throw new Error('Server error. Please try again later.');
        }
        
        const data = await res.json();
        
        if (res.ok) {
          console.log("🔍 Dashboard attorney data:", data.attorney);

            // Save attorney data for profile page
              localStorage.setItem("attorneyData", JSON.stringify(data.attorney));

          setAttorney(data.attorney);
          setTodayAppointments(data.stats.todayAppointments);
          setTotalPatients(data.stats.totalClients);
          setUpcomingAppointments(data.stats.upcomingAppointments);
          setEarnings(data.stats.earnings);
          
          // Fetch attorney appointments
          await fetchAttorneyAppointments(token);
        } else {
          // Check if force logout is required
          if (data.forceLogout || data.deactivated) {
            console.log("🔍 Force logout required - clearing session");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("role");
            alert("Your account has been deactivated by admin. You have been logged out.");
            navigate("/login");
            return;
          }
          setError(data.message || "Failed to load dashboard");
        }
      } catch (err) {
        console.error("Dashboard error:", err);
        setError(err.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    const fetchAttorneyAppointments = async (token) => {
      try {
        const res = await fetch(API.ATTORNEY_APPOINTMENTS, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (res.ok) {
          const data = await res.json();
          setAppointments(data.appointments || []);
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          {loading ? (
            <>
              <h1>Loading dashboard…</h1>
              <p>Please wait</p>
            </>
          ) : error ? (
            <>
              <h1>Welcome</h1>
              <p style={{ opacity: 0.9 }}>{error}</p>
            </>
          ) : (
            <>
              <h1>Welcome Attorney {attorney?.name || 'Attorney'} 👋</h1>
              <p>You have {todayAppointments} appointments today.</p>
            </>
          )}
        </div>

        
        <div className="stats-cards">
          <div className="card">
            <h2>Total Users</h2>
            <p>{totalPatients}</p>
          </div>
          <div className="card">
            <h2>Upcoming Appointments</h2>
            <p>{upcomingAppointments}</p>
          </div>
          <div className="card">
            <h2>Earnings</h2>
            <p>Rs.{earnings}</p>
          </div>
        </div>

        {/* Recent Appointments Section */}
        <div className="recent-appointments">
          <h3>Recent Appointments</h3>
          <div className="appointments-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Client</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? appointments.slice(0, 5).map(appointment => (
                  <tr key={appointment.id}>
                    <td>{appointment.date || "N/A"}</td>
                    <td>{appointment.time || "N/A"}</td>
                    <td>{appointment.patientName || appointment.clientName || "Unknown"}</td>
                    <td>
                      <span
                        className="status-badge"
                        style={{ 
                          backgroundColor: 
                            appointment.status === 'Completed' ? '#28a745' :
                            appointment.status === 'Scheduled' ? '#007bff' :
                            appointment.status === 'Cancelled' ? '#dc3545' :
                            appointment.status === 'Pending' ? '#ffc107' : '#6c757d'
                        }}
                      >
                        {appointment.status || 'Unknown'}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center' }}>No appointments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AttorneyDashboard;
