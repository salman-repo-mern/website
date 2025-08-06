import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, Calendar } from 'lucide-react';
import './index.css';

const Contact = () => {
  // State to manage form input data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: '',
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handles form submission.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to a server here.
    console.log('Form Data Submitted:', formData);

    // Show the success message
    setIsSubmitted(true);

    // Reset form fields
    setFormData({ name: '', phone: '', address: '', message: '' });

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  /**
   * Handles changes in form inputs and updates the state.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions about our products or want to place a bulk order? We'd love to hear from you!
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="contact-grid">
          {/* Left Column: Contact Form */}
          <div className="form-container">
            <h3 className="form-title">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Phone Input */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Contact Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Address Textarea */}
              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="form-textarea"
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <div className="form-group">
                <button type="submit" className="submit-btn">
                  <Send size={18} />
                  Send Message
                </button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <p>Message Sent! Thank you for reaching out. We'll get back to you soon!</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Map and Info */}
          <div className="info-column">
            {/* Map Embed */}
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7452162265744!2d79.10096921482391!3d13.21667361306896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38a2e6e3c6e1%3A0x8bb6e663a2f78e9d!2sNo.14%20G%201133%2C%20Goolingspet%20St%2C%20Chittoor%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1722754978473!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bismi Fresh Foods Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="details-container">
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Phone className="icon" />
                </div>
                <div>
                  <h4 className="detail-title">Phone</h4>
                  <a href="tel:+916300414449" className="detail-link">+91 63004 14449</a>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-wrapper">
                  <MapPin className="icon" />
                </div>
                <div>
                  <h4 className="detail-title">Address</h4>
                  <p className="detail-text">
                    No.14 G 1133, Goolingspet Street, Chittoor, Andhra Pradesh, 517001
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Calendar className="icon" />
                </div>
                <div>
                  <h4 className="detail-title">Established</h4>
                  <p className="detail-text">
                    Since 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact