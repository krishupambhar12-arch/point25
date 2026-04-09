import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <>
      <Header />
      <div className="disclaimer-container">
        <div className="disclaimer-content">
          <h1>Disclaimer</h1>
          
         
          
          <div className="disclaimer-section">
            <h2>1. Legal Information</h2>
            <p>The information provided by Justice Point is for general informational purposes only. All information on the website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the website.</p>
          </div>
          <div className="disclaimer-section">
            <h2>2. Professional Legal Advice</h2>
            <p>Our website is not a substitute for professional legal advice. Always seek the advice of a qualified legal professional for specific legal matters. Do not disregard professional legal advice or delay in seeking it because of something you have read on this website.</p>
          </div>
          <div className="disclaimer-section">
            <h2>3. No Attorney-Client Relationship</h2>
            <p>Use of our website does not create an attorney-client relationship between you and Justice Point or any of our affiliated attorneys. An attorney-client relationship is only formed when a formal engagement agreement is signed between you and a specific attorney.</p>
          </div>
          <div className="disclaimer-section">
            <h2>4. Accuracy of Information</h2>
            <p>We strive to provide accurate and up-to-date information, but we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information contained on our website. Laws and regulations change frequently, and the information may not reflect current legal requirements.</p>
          </div>
          <div className="disclaimer-section">
            <h2>5. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of third-party sites. We are not responsible for the content, accuracy, or opinions expressed in such websites, and any reliance you place on such information is strictly at your own risk.</p>
          </div>
          <div className="disclaimer-section">
            <h2>6. Limitation of Liability</h2>
            <p>In no event shall Justice Point be liable for any loss or damage arising from the use of our website or reliance on information provided. This includes direct, indirect, incidental, punitive, and consequential damages.</p>
          </div>
          <div className="disclaimer-section">
            <h2>7. Service Availability</h2>
            <p>We do not guarantee that our website will be available at all times. We may experience hardware, software, or other problems that could lead to interruptions. We are not liable for any loss or damage arising from such interruptions.</p>
          </div>
          <div className="disclaimer-section">
            <h2>8. User Testimonials</h2>
            <p>Testimonials and reviews on our website represent individual experiences and opinions. They do not guarantee similar results for all users. Individual results may vary based on various factors.</p>
          </div>
          <div className="disclaimer-section">
            <h2>9. Professional Qualifications</h2>
            <p>While we verify the credentials of attorneys on our platform, we cannot guarantee the quality or outcome of legal services provided. Users should conduct their own due diligence when selecting legal representation.</p>
          </div>
          <div className="disclaimer-section">
            <h2>10. Updates to This Disclaimer</h2>
            <p>We reserve the right to amend this disclaimer at any time. Any changes will be posted on this page with an updated date. Your continued use of the website constitutes acceptance of these changes.</p>
          </div>
          <div className="disclaimer-section">
            <h2>11. Contact Information</h2>
            <p>If you have any questions about this disclaimer, please contact us at justicepoint@gmail.com or +86 21 2412 6000.</p>
          </div>


           {/* Legal Practice Areas Section */}
          <div className="disclaimer-section legal-areas">
            <h2>Legal Practice Areas</h2>
            <div className="legal-areas-grid">
              <div className="legal-area-card">
                <h3>Family Law & Divorce</h3>
                <p>Comprehensive legal services for matrimonial disputes, divorce proceedings, child custody matters, alimony and maintenance cases. Expertise in Hindu Marriage Act, Special Marriage Act, and Guardianship laws.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Child Custody & Guardianship</h3>
                <p>Legal representation for child custody battles, visitation rights, and guardianship matters. Focus on child welfare as paramount consideration, with expertise in both physical and joint custody arrangements.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Consumer Protection Law</h3>
                <p>Assistance with consumer complaints, product liability issues, service disputes, and compensation claims. Expert guidance on filing complaints in consumer forums and navigating consumer protection laws.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Criminal Law & Defense</h3>
                <p>Legal representation for criminal cases, bail applications, anticipatory bail, and defense against false charges. Expertise in criminal procedure, rights of accused, and police arrest procedures.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Property Registration & Real Estate</h3>
                <p>Complete legal services for property registration, title verification, documentation, and real estate transactions. Expertise in Registration Act, stamp duty, and property transfer procedures.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Corporate Law & Business</h3>
                <p>Legal services for business formation, corporate compliance, contract drafting, mergers & acquisitions, and commercial disputes. Expertise in company law and business regulations.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Civil Litigation</h3>
                <p>Representation in civil suits, property disputes, contract enforcement, and recovery matters. Expertise in civil procedure, evidence law, and civil remedies.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Labor & Employment Law</h3>
                <p>Legal services for employment disputes, wrongful termination, workplace harassment, labor compliance, and industrial relations. Expertise in labor laws and employee rights.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Taxation Law</h3>
                <p>Advisory and representation for tax matters, GST compliance, income tax disputes, and tax planning. Expertise in direct and indirect tax laws and tribunal proceedings.</p>
              </div>
              
              <div className="legal-area-card">
                <h3>Intellectual Property</h3>
                <p>Protection of intellectual property rights, trademark registration, patent filing, copyright issues, and IP infringement matters. Expertise in IP laws and enforcement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
