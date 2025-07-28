import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "../css/TestimonialsHome.css";

const testimonials = [
  {
    text: `Proin iaculis purus consequat sem cure digni ssim...`,
    img: "/src/assets/img/person/person-m-9.webp",
    name: "Saul Goodman",
    role: "Ceo & Founder",
  },
  {
    text: `Export tempor illum tamen malis malis eram quae...`,
    img: "/src/assets/img/person/person-f-5.webp",
    name: "Sara Wilsson",
    role: "Designer",
  },
  {
    text: `Enim nisi quem export duis labore cillum quae magna...`,
    img: "/src/assets/img/person/person-f-12.webp",
    name: "Jena Karlis",
    role: "Store Owner",
  },
  {
    text: `Fugiat enim eram quae cillum dolore dolor amet nulla...`,
    img: "/src/assets/img/person/person-m-12.webp",
    name: "Matt Brandon",
    role: "Freelancer",
  },
  {
    text: `Quis quorum aliqua sint quem legam fore sunt eram...`,
    img: "/src/assets/img/person/person-m-13.webp",
    name: "John Larson",
    role: "Entrepreneur",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="testimonials-home" className="testimonials-home section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div>
          <span>What Our Customers</span>{" "}
          <span className="description-title">Are Saying</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{item.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={item.img} className="testimonial-img" alt={item.name} />
                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
