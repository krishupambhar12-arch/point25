import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <div className="cookie-container">
        <div className="cookie-content">
          <h1>Cookie Policy</h1>
          <div className="cookie-section">
            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and tracking your activity.</p>
          </div>
          <div className="cookie-section">
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies to analyze website traffic, personalize content, provide social media features, and understand how our services are being used. This helps us improve our services and provide you with relevant information.</p>
          </div>
          <div className="cookie-section">
            <h2>3. Types of Cookies We Use</h2>
            <p>We use essential cookies for website functionality, analytics cookies for performance tracking, marketing cookies for personalized advertising, and functional cookies to remember your preferences.</p>
          </div>
          <div className="cookie-section">
            <h2>4. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. You can choose to accept or reject cookies, and you can delete all cookies already stored on your device. However, disabling certain cookies may affect your user experience.</p>
          </div>
          <div className="cookie-section">
            <h2>5. Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services that appear on our pages, such as analytics and advertising partners. These third-party cookies may track your activity across different websites for marketing purposes.</p>
          </div>
          <div className="cookie-section">
            <h2>6. Your Consent</h2>
            <p>By using our website, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings.</p>
          </div>
          <div className="cookie-section">
            <h2>7. Cookie Duration</h2>
            <p>Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them. We typically use persistent cookies with a duration of 30 days to 1 year.</p>
          </div>
          <div className="cookie-section">
            <h2>8. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.</p>
          </div>
          <div className="cookie-section">
            <h2>9. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at justicepoint@gmail.com or +86 21 2412 6000.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
