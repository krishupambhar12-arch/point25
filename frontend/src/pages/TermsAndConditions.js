import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="terms-container">
        <div className="terms-content">
          <h1>Terms & Conditions</h1>
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Justice Point, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </div>
          <div className="terms-section">
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of Justice Point for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display.</p>
          </div>
          <div className="terms-section">
            <h2>3. Account Registration</h2>
            <p>To access certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
          </div>
          <div className="terms-section">
            <h2>4. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.</p>
          </div>
          <div className="terms-section">
            <h2>5. Disclaimer</h2>
            <p>The information on this website is provided on an as-is basis. To the fullest extent permitted by law, this Company disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
          </div>
          <div className="terms-section">
            <h2>6. Limitations of Liability</h2>
            <p>In no event shall this Company nor its suppliers be liable for any damages arising out of the use or inability to use this website, including but not limited to damages for loss of profits, use, data, or other intangible losses.</p>
          </div>
          <div className="terms-section">
            <h2>7. Privacy Policy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy, which also governs the site visit, to understand our practices.</p>
          </div>
          <div className="terms-section">
            <h2>8. Professional Services</h2>
            <p>Justice Point is a platform connecting users with legal professionals. We do not provide legal advice directly. All legal services are provided by independent attorneys who are not employees of Justice Point.</p>
          </div>
          <div className="terms-section">
            <h2>9. Payment Terms</h2>
            <p>For paid services, you agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information.</p>
          </div>
          <div className="terms-section">
            <h2>10. Termination</h2>
            <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.</p>
          </div>
          <div className="terms-section">
            <h2>11. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the site means you accept these changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>
          </div>
          <div className="terms-section">
            <h2>12. Contact Information</h2>
            <p>Questions about the Terms and Conditions should be sent to us at justicepoint@gmail.com or +86 21 2412 6000.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
