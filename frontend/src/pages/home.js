import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import ServiceIcon from "../components/ServiceIcon";
import "../styles/home.css";
import "../styles/services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(API.ALL_SERVICES);
      const data = await response.json();
      if (response.ok) {
        setServices(data.services || []);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setServicesLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/attorneys?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/attorneys');
    }
  };

  const handleSpecialtyClick = (specialty) => {
    navigate(`/attorneys?specialization=${encodeURIComponent(specialty)}`);
  };

  const handleSymptomClick = (symptom) => {
    navigate(`/attorneys?search=${encodeURIComponent(symptom)}`);
  };

  const handleBookService = (service) => {
    // Navigate to attorneys page with service context
    navigate('/attorneys', { state: { service: service.service_name } });
  };

  const handleBookNow = (service) => {
    // Check if user is logged in and is a client (Patient/Client)
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      alert("Please login to book appointments");
      navigate("/login");
      return;
    }

    const isClient = role === "Patient" || role === "Client";
    if (!isClient) {
      alert("Only clients can book appointments");
      return;
    }

    // Navigate to attorneys listing for the specific service
    if (service === "appointment") {
      navigate("/attorneys");
    } else if (service === "consultation") {
      navigate("/client/consultation");
    } else if (service === "labtest") {
      navigate("/lab-tests");
    }
  };

  return (
    <>
      <Header />
      

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">

          {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search attorneys by name, specialization, or case type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

          <h1 className="hero-title">Welcome to Justice Point</h1>
          <p className="hero-subtitle">Your trusted platform for connecting with the best legal professionals. Book appointments, get legal advice, and resolve your legal matters efficiently.</p>
          <div className="hero-buttons">
            <button className="btn btn-secondary" onClick={() => handleBookNow("appointment")}>
              <i className="fas fa-calendar-check me-2"></i>Book Appointment
            </button>
            <button className="btn btn-outline-light" onClick={() => navigate("/attorneys")}>
              <i className="fas fa-users me-2"></i>Find a Lawyer
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Expert Lawyers</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">10k+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Legal Categories</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">24/7</div>
              <div className="hero-stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics Cards */}
      <div className="statistics-cards-section">
        <div className="statistics-container">
          <div className="stat-card">
            <i className="fas fa-gavel"></i>
            <div className="stat-number">500+</div>
            <div className="stat-label">Registered Lawyers</div>
          </div>
          <div className="stat-card">
            <i className="fas fa-users"></i>
            <div className="stat-number">2,500+</div>
            <div className="stat-label">Clients Served</div>
          </div>
          <div className="stat-card">
            <i className="fas fa-calendar-check"></i>
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Appointments</div>
          </div>
          <div className="stat-card">
            <i className="fas fa-balance-scale"></i>
            <div className="stat-number">15+</div>
            <div className="stat-label">Legal Areas</div>
          </div>
        </div>
      </div>
      
      {/* How Justice Point Works Section */}
      <div className="content-card">
        <h2 className="text-center mb-5" style={{color: "#7B638D"}}>How Justice Point Works</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="feature-title">1. Search Lawyer</h3>
              <p className="feature-description">Browse through our extensive network of qualified lawyers by specialty, location, or client ratings.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="feature-title">2. Book Appointment</h3>
              <p className="feature-description">Select your preferred date, time slot, and case type. Upload relevant documents if needed.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card" onClick={() => navigate("/ai-advisor")} style={{cursor: "pointer"}}>
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="feature-title">AI Legal Advisor</h3>
              <p className="feature-description">Get instant AI-powered legal guidance for your questions and concerns.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="feature-title">4. Share Feedback</h3>
              <p className="feature-description">Rate your experience and help other clients make informed decisions about legal services.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Services */}
      <h2>Our Legal Services</h2>
      <div className="services">
        {servicesLoading ? (
          <div className="loading">Loading services...</div>
        ) : services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} className="service-card" onClick={() => handleBookService(service)}>
              <div className="service-icon">
                <ServiceIcon 
                  iconName={service.icon || 'Gavel'} 
                  iconFile={service.icon_file}
                  size={48} 
                />
              </div>
              <h3>{service.service_name}</h3>
              <p>{service.description || 'Professional legal service'}</p>
              <button className="book-btn" onClick={(e) => {
                e.stopPropagation();
                handleBookService(service);
              }}>Book Now</button>
            </div>
          ))
        ) : (
          <div className="no-services">
            <p>No services available at the moment.</p>
          </div>
        )}
      </div>

      {/* Client Success Stories */}
      <h2>Client Success Stories</h2>
      <div className="symptoms">
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c1" alt="Sarah Johnson" />
          <div className="symptom-content">
            <span>Sarah Johnson</span>
            <p>"Excellent contract review service. They identified critical clauses I missed and saved my business from potential disputes."</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c2.avif" alt="Michael Chen" />
          <div className="symptom-content">
            <span>Michael Chen</span>
            <p>"Professional mediation services resolved our partnership dispute efficiently. Fair outcome for all parties involved."</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c3" alt="Emily Rodriguez" />
          <div className="symptom-content">
            <span>Emily Rodriguez</span>
            <p>"Helped our startup navigate complex regulatory requirements. Now fully compliant and operational."</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c4" alt="David Thompson" />
          <div className="symptom-content">
            <span>David Thompson</span>
            <p>"Expert criminal defense representation achieved the best possible outcome for my case. Highly recommend their services."</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c5" alt="Lisa Anderson" />
          <div className="symptom-content">
            <span>Lisa Anderson</span>
            <p>"Family law matters handled with compassion and professionalism. Helped us through a difficult divorce process."</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Practice")}>
          <img src="/images/client/c6.jpg" alt="Robert Martinez" />
          <div className="symptom-content">
            <span>Robert Martinez</span>
            <p>"Corporate structuring and compliance services were invaluable for our business expansion. Worth every penny!"</p>
            <button className="book-btn">Find Attorneys</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
