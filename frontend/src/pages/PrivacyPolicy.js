import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="privacy-container">
        <div className="privacy-content">
          <h1>Privacy Policy</h1>
          <div className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes personal information like name, email address, phone number, and professional details.</p>
          </div>
          <div className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and personalize your experience. We also use information for security purposes and to comply with legal obligations.</p>
          </div>
          <div className="privacy-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share information with: legal professionals you connect with, service providers who assist in operating our business, and when required by law.</p>
          </div>
          <div className="privacy-section">
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, and regular security reviews.</p>
          </div>
          <div className="privacy-section">
            <h2>5. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies help us understand user behavior, improve our services, and provide personalized experiences.</p>
          </div>
          <div className="privacy-section">
            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary based on the type of information and legal requirements.</p>
          </div>
          <div className="privacy-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time. You may also object to processing of your personal information, request data portability, or withdraw consent where applicable.</p>
          </div>
          <div className="privacy-section">
            <h2>8. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.</p>
          </div>
          <div className="privacy-section">
            <h2>9. Children's Privacy</h2>
            <p>Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will take steps to delete it promptly.</p>
          </div>
          <div className="privacy-section">
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the bottom of this policy.</p>
          </div>
          <div className="privacy-section">
            <h2>11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at justicepoint@gmail.com or +86 21 2412 6000.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
