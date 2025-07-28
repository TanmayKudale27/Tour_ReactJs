import React, { useEffect } from "react";
import "../css/WhyUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="why-us" className="why-us section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="content">
              <h3>Explore the World with Confidence</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="2">
                    1200
                  </span>
                  <div className="stat-label">Happy Travelers</div>
                </div>
                <div className="stat-item">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2">
                    85
                  </span>
                  <div className="stat-label">Countries Covered</div>
                </div>
                <div className="stat-item">
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="2">
                    15
                  </span>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-image position-relative">
              <img
                src="/src/assets/img/travel/showcase-8.webp"
                alt="Travel Experience"
                className="img-fluid rounded-4"
              />
              <div className="experience-badge">
                <div className="experience-number">15+</div>
                <div className="experience-text">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="why-choose-section">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3>Why Choose Us for Your Next Adventure</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { icon: "bi-people-fill", title: "Local Experts", text: "Sed ut perspiciatis unde omnis..." },
              { icon: "bi-shield-check", title: "Safe & Secure", text: "At vero eos et accusamus..." },
              { icon: "bi-cash", title: "Best Prices", text: "Neque porro quisquam est..." },
              { icon: "bi-headset", title: "24/7 Support", text: "Ut enim ad minima veniam..." },
              { icon: "bi-geo-alt-fill", title: "Global Destinations", text: "Quis autem vel eum iure..." },
              { icon: "bi-star-fill", title: "Premium Experience", text: "Excepteur sint occaecat..." },
            ].map((item, idx) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200 + idx * 50} key={idx}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
