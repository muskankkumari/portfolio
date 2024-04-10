import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import nextIcon from "../assets/next.png";
import prevIcon from "../assets/prev.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import data from "./data.json";

const Recentprojects = () => {
  return (
    <div className="projects-showcase">
      <div className="projects-showcase-top">
        <div className="primary-heading">My Recent Projects</div>
        <NavLink to="/projects">
          <button className="visit btn">
            Visit
            <FaArrowRightLong />
          </button>
        </NavLink>
      </div>
      <div className="project-showcase-box">
        <Swiper
          navigation={{
            navigation: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[ Navigation,  Autoplay ]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            550: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {
            Object.entries(data.projects).map((project, index)=>{
              return (
                <SwiperSlide key={index}>
                <div className="pro-showcase-img">
                  <img src={project[1].image} alt="" />
                </div>
                <div className="pro-showcase-name"></div>
              </SwiperSlide>
              )
            })
          }
          <div className="swiper-button-next">
            <img src={nextIcon} alt="" />
          </div>
          <div className="swiper-button-prev">
            <img src={prevIcon} alt="" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Recentprojects;
