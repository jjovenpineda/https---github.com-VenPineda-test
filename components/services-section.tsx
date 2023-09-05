"use client";

import BusinessTrade from "public/Images/Business.svg";
import Certificates from "public/Images/Cert_ID.svg";
import Contributions from "public/Images/Contrib.svg";
import Weather from "public/Images/Disaster.svg";
import Education from "public/Images/Educ.svg";
import Employment from "public/Images/Employ.svg";
import Health from "public/Images/Health.svg";
import Housing from "public/Images/Housing.svg";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const servicesSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size and update state
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 360); // Change 768 to your desired breakpoint
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <h1 className="flex items-center sm:justify-center font-bold text-2xl font-['Gilroy'] sm:text-4xl p-4 pb-5">
        Services
      </h1>
      <div className="w-auto overflow-hidden">
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 8,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={!isSmallScreen}
          navigation={!isSmallScreen}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={BusinessTrade} alt="" />
              <h2 className="text-[#ffffff]">Business & trade</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center borders"
            >
              {" "}
              <Image src={Certificates} alt="" />
              <h2 className="text-[#ffffff]  ">Certificates & IDs</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Contributions} alt="" />
              <h2 className="text-[#ffffff]  ">Contributions</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Weather} alt="" />
              <h2 className="text-[#ffffff]  ">Disaster & Weather</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Education} alt="" />
              <h2 className="text-[#ffffff]  ">Education</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Employment} alt="" />
              <h2 className="text-[#ffffff]  ">Employment</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Health} alt="" />
              <h2 className="text-[#ffffff]  ">Health</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Housing} alt="" />
              <h2 className="text-[#ffffff]  ">Housing & Infrastructures</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              {" "}
              <Image src={Housing} alt="" />
              <h2 className="text-[#ffffff]  ">Housing & Infrastructures</h2>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default servicesSection;
