import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/FeaturedDestinations.css"; // You'll create this CSS file

const FeaturedDestinations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="featured-destinations" className="featured-destinations section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Destinations</h2>
        <div>
          <span>Check Our </span>
          <span className="description-title">Featured Destinations</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Left: Main Destination */}
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="featured-destination">
              <div className="destination-overlay">
                <img
                  src="/src/assets/img/travel/destination-3.webp"
                  alt="Tropical Paradise"
                  className="img-fluid"
                />
                <div className="destination-info">
                  <span className="destination-tag">Popular Choice</span>
                  <h3>Tropical Paradise</h3>
                  <p className="location">
                    <i className="bi bi-geo-alt-fill"></i> Maldives
                  </p>
                  <p className="description">
                    Pristine beaches, crystal-clear waters, and luxury overwater villas await in this tropical paradise destination.
                  </p>
                  <div className="destination-meta">
                    <div className="tours-count">
                      <i className="bi bi-collection"></i>
                      <span>22 Packages</span>
                    </div>
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <span>4.9 (412)</span>
                    </div>
                  </div>
                  <div className="price-info">
                    <span className="starting-from">Starting from</span>
                    <span className="amount">$2,150</span>
                  </div>
                  <a href="destination-details.html" className="explore-btn">
                    <span>Explore Now</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Compact Destinations */}
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                {
                  title: "Mountain Adventure",
                  location: "Nepal",
                  img: "/src/assets/img/travel/destination-7.webp",
                  badge: "Best Value",
                  description: "Breathtaking Himalayan peaks and ancient Buddhist temples create an unforgettable spiritual journey.",
                  tours: "16 Tours",
                  rating: "4.8",
                  price: "$1,420",
                  delay: 300,
                },
                {
                  title: "Cultural Heritage",
                  location: "Peru",
                  img: "/src/assets/img/travel/destination-11.webp",
                  badge: null,
                  description: "Discover ancient civilizations, colorful markets, and archaeological wonders in the heart of South America.",
                  tours: "9 Expeditions",
                  rating: "4.7",
                  price: "$980",
                  delay: 400,
                },
                {
                  title: "Safari Experience",
                  location: "Kenya",
                  img: "/src/assets/img/travel/destination-16.webp",
                  badge: "Limited Spots",
                  description: "Witness the Big Five and experience the great migration in Africa's most spectacular wildlife reserves.",
                  tours: "11 Safaris",
                  rating: "4.9",
                  price: "$2,750",
                  delay: 500,
                },
              ].map((item, idx) => (
                <div className="col-12" data-aos="fade-left" data-aos-delay={item.delay} key={idx}>
                  <div className="compact-destination">
                    <div className="destination-image">
                      <img src={item.img} alt={item.title} className="img-fluid" />
                      {item.badge && (
                        <div className={`badge-offer ${item.badge === "Limited Spots" ? "limited" : ""}`}>
                          {item.badge}
                        </div>
                      )}
                    </div>
                    <div className="destination-details">
                      <h4>{item.title}</h4>
                      <p className="location">
                        <i className="bi bi-geo-alt"></i> {item.location}
                      </p>
                      <p className="brief">{item.description}</p>
                      <div className="stats-row">
                        <span className="tour-count">
                          <i className="bi bi-calendar-check"></i> {item.tours}
                        </span>
                        <span className="rating">
                          <i className="bi bi-star-fill"></i> {item.rating}
                        </span>
                        <span className="price">from {item.price}</span>
                      </div>
                      <a href="destination-details.html" className="quick-link">
                        View Details <i className="bi bi-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
