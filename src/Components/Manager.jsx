import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const managers = [
  {
    img: "images/review-pic1.jpeg",
    name:"Ram",
    occupation: "B.Tech+B.S representative",
    phone:+123123123,
    email: "sitharam@gmail.com"
  },
  {
    img: "images/review-pic4.jpeg",
    name: "Ram",
    occupation: "B.Tech+B.S representative",
    phone:+123456789,
    email: "sitharam@gmail.com"
  },
  {
    img: "images/review-pic4.jpeg",
    name: "Ram",
    occupation: "B.Tech+B.S representative",
    phone:+111222333,
    email: "sitharam@gmail.com"
  },
  {
    img: "images/review-pic4.jpeg",
    name: "Ram",
    occupation: "B.Tech+B.S representative",
    phone:+222444555666,
    email: "sitharam@gmail.com"
  },
  // Add more review objects as needed
];

const Manager = () => {
  return (
    <section className="manager" id="manager">
      <div>
      <h2 className="heading">
        Institute <span>Placement Managers</span>
      </h2>
      <a href="#" >
            <i className="fas fa-envelope"></i> placement@rguktrkv.com
      </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Slide transition delay in milliseconds
          disableOnInteraction: false, // Slider will continue after interaction
        }}
        className="manager-slider"
      >
        {managers.map((manager, index) => (
          <SwiperSlide key={index} className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={manager.img} alt={manager.name} />
              <div className="user-info">
                <h3>{manager.name}</h3>
                <span>{manager.occupation}</span>
                <a href="#">
                  <i className="fas fa-phone"></i>{manager.phone}
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i>{manager.email}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Manager;
