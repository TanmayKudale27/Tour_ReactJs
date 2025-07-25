import React from "react";
import "../css/Hero.css";

const TravelHero = () => {
  return (
    <section id="travel-hero" className="travel-hero section dark-background">
      <div className="hero-background">
        <video autoPlay muted loop>
          <source src="src/assets/img/travel/video-2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
              <h1 className="hero-title">Discover Your Perfect Journey</h1>
              <p className="hero-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary me-3">Start Exploring</a>
                <a href="#" className="btn btn-outline">Browse Tours</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="booking-form-wrapper" data-aos="fade-left" data-aos-delay="200">
              <div className="booking-form">
                <h3 className="form-title">Plan Your Adventure</h3>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="destination">Destination</label>
                    <select name="destination" id="destination" className="form-select" required>
                      <option value="">Choose your destination</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="america">America</option>
                      <option value="africa">Africa</option>
                      <option value="oceania">Oceania</option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="checkin">Departure Date</label>
                        <input type="date" name="checkin" id="checkin" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="checkout">Return Date</label>
                        <input type="date" name="checkout" id="checkout" className="form-control" required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="adults">Adults</label>
                        <select name="adults" id="adults" className="form-select" required>
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4+ Adults</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor="children">Children</label>
                        <select name="children" id="children" className="form-select">
                          <option value="0">No Children</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                          <option value="3">3+ Children</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="tour-type">Tour Type</label>
                    <select name="tour_type" id="tour-type" className="form-select" required>
                      <option value="">Select tour type</option>
                      <option value="adventure">Adventure</option>
                      <option value="cultural">Cultural</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="family">Family</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Find Your Perfect Trip</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelHero;
