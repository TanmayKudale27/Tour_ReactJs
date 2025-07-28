import React from "react";
import "../css/FeaturedTours.css";

const FeaturedTours = () => {
  return (
    <section id="featured-tours" className="featured-tours section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Tours</h2>
        <div>
          <span>Check Our</span> <span className="description-title">Featured Tours</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {[
            {
              img: "tour-1.webp",
              alt: "Serene Beach Retreat",
              badge: "Top Rated",
              price: "$2,150",
              title: "Serene Beach Retreat",
              duration: "8 Days",
              groupSize: "Max 6",
              desc:
                "Mauris ipsum neque, cursus ac ipsum at, iaculis facilisis ligula.",
              highlights: ["Maldives", "Seychelles", "Bora Bora"],
              rating: "4.8 (95)",
              stars: 4.5,
            },
            {
              img: "tour-2.webp",
              alt: "Arctic Expedition",
              badge: "Only 3 Spots!",
              price: "$5,700",
              title: "Arctic Wilderness Expedition",
              duration: "10 Days",
              groupSize: "Max 8",
              desc:
                "Vestibulum ante ipsum primis in faucibus orci luctus.",
              highlights: ["Greenland", "Iceland", "Norway"],
              rating: "4.6 (55)",
              stars: 4,
            },
            {
              img: "tour-4.webp",
              alt: "Desert Safari",
              badge: "Newly Added",
              price: "$1,400",
              title: "Sahara Desert Discovery",
              duration: "5 Days",
              groupSize: "Max 10",
              desc:
                "Pellentesque euismod tincidunt turpis ac tristique.",
              highlights: ["Morocco", "Egypt", "Dubai"],
              rating: "4.9 (72)",
              stars: 5,
            },
            {
              img: "tour-5.webp",
              alt: "Coastal Explorer",
              badge: "Popular Choice",
              price: "$1,980",
              title: "Mediterranean Coastal Cruise",
              duration: "9 Days",
              groupSize: "Max 15",
              desc:
                "Nullam lacinia justo eget ex sodales, vel finibus orci aliquet.",
              highlights: ["Greece", "Croatia", "Italy"],
              rating: "4.7 (110)",
              stars: 4.5,
            },
            {
              img: "tour-6.webp",
              alt: "Rainforest Trek",
              badge: "Eco-Friendly",
              price: "$2,650",
              title: "Amazon Rainforest Trek",
              duration: "12 Days",
              groupSize: "Max 10",
              desc:
                "Quisque dictum felis eu tortor mollis, quis tincidunt arcu pharetra.",
              highlights: ["Brazil", "Ecuador", "Peru"],
              rating: "4.5 (88)",
              stars: 4,
            },
            {
              img: "tour-8.webp",
              alt: "Patagonian Peaks",
              badge: "Adventure Seekers",
              price: "$3,950",
              title: "Patagonian Peaks & Glaciers",
              duration: "14 Days",
              groupSize: "Max 10",
              desc:
                "Vivamus eget semper neque. Ut porttitor mi at odio egestas.",
              highlights: ["Argentina", "Chile", "Ushuaia"],
              rating: "4.9 (60)",
              stars: 5,
            },
          ].map((tour, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              key={index}
            >
              <div className="tour-card">
                <div className="tour-image">
                  <img
                    src={`src/assets/img/travel/${tour.img}`}
                    alt={tour.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="tour-badge">{tour.badge}</div>
                  <div className="tour-price">{tour.price}</div>
                </div>
                <div className="tour-content">
                  <h4>{tour.title}</h4>
                  <div className="tour-meta">
                    <span className="duration">
                      <i className="bi bi-clock"></i> {tour.duration}
                    </span>
                    <span className="group-size">
                      <i className="bi bi-people"></i> {tour.groupSize}
                    </span>
                  </div>
                  <p>{tour.desc}</p>
                  <div className="tour-highlights">
                    {tour.highlights.map((loc, i) => (
                      <span key={i}>{loc}</span>
                    ))}
                  </div>
                  <div className="tour-action">
                    <a href="booking.html" className="btn-book">
                      Book Now
                    </a>
                    <div className="tour-rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={
                            i < Math.floor(tour.stars)
                              ? "bi bi-star-fill"
                              : i < tour.stars
                              ? "bi bi-star-half"
                              : "bi bi-star"
                          }
                        ></i>
                      ))}
                      <span>{tour.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
          <a href="tours.html" className="btn-view-all">
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
