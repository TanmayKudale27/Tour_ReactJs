import React from "react";
import "aos/dist/aos.css";
import "../css/CallToAction.css"; // Make sure this path matches your folder structure

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="hero-content" data-aos="zoom-in" data-aos-delay="200">
          <div className="content-wrapper">
            <div className="badge-wrapper">
              <span className="promo-badge">Limited Time Offer</span>
            </div>
            <h2>Discover Your Next Adventure</h2>
            <p>
              Unlock incredible destinations with our specially curated travel
              packages. From exotic beaches to mountain peaks, your perfect getaway
              awaits.
            </p>

            <div className="action-section">
              <div className="main-actions">
                <a href="/destinations" className="btn btn-explore">
                  <i className="bi bi-compass"></i> Explore Now
                </a>
                <a href="/deals" className="btn btn-deals">
                  <i className="bi bi-percent"></i> View Deals
                </a>
              </div>

              <div className="quick-contact">
                <span className="contact-label">Need help choosing?</span>
                <a href="tel:+1555123456" className="contact-link">
                  <i className="bi bi-telephone"></i> Call +1 (555) 123-456
                </a>
              </div>
            </div>
          </div>

          <div className="visual-element">
            <img
              src="/src/assets/img/travel/showcase-3.webp"
              alt="Travel Adventure"
              className="hero-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-section" data-aos="fade-up" data-aos-delay="300">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <i className="bi bi-envelope-heart"></i>
              </div>
              <div className="newsletter-text">
                <h3>Stay in the Loop</h3>
                <p>
                  Get exclusive travel deals and destination guides delivered to
                  your inbox
                </p>
              </div>
            </div>

            <form className="newsletter-form">
              <div className="form-wrapper">
                <input
                  type="email"
                  name="email"
                  className="email-input"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="subscribe-btn">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="trust-indicators">
                <i className="bi bi-lock"></i>
                <span>We protect your privacy. Unsubscribe anytime.</span>
              </div>
            </form>
          </div>
        </div>

        <div className="benefits-showcase" data-aos="fade-up" data-aos-delay="400">
          <div className="benefits-header">
            <h3>Why Choose Our Adventures</h3>
            <p>Experience the difference with our premium travel services</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card" data-aos="flip-left" data-aos-delay="450">
              <div className="benefit-visual">
                <div className="benefit-icon-wrap">
                  <i className="bi bi-geo-alt"></i>
                </div>
              </div>
              <div className="benefit-content">
                <h4>Handpicked Destinations</h4>
                <p>
                  Every location is carefully selected by our travel experts for
                  authentic experiences
                </p>
              </div>
            </div>

            <div className="benefit-card" data-aos="flip-left" data-aos-delay="500">
              <div className="benefit-visual">
                <div className="benefit-icon-wrap">
                  <i className="bi bi-award"></i>
                </div>
              </div>
              <div className="benefit-content">
                <h4>Award-Winning Service</h4>
                <p>Recognized for excellence with 5-star ratings and awards</p>
              </div>
            </div>

            <div className="benefit-card" data-aos="flip-left" data-aos-delay="550">
              <div className="benefit-visual">
                <div className="benefit-icon-wrap">
                  <i className="bi bi-heart"></i>
                </div>
              </div>
              <div className="benefit-content">
                <h4>Personalized Care</h4>
                <p>
                  Tailored itineraries designed around your preferences and travel
                  style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
