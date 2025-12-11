"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import tiktik from "@/app/images/Titik.svg";
import Image from "next/image";

interface Service {
  id: string | number;
  serviceName: string;
  description: string;
  image: string;
}

interface ServicePageCarouselProps {
  services: Service[];
}

const ServicePageCarousel = ({ services }: ServicePageCarouselProps) => {
  if (!services || services.length === 0) return null;
  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 left-[32%] lg:left-[75%] h-[48px] w-[48px] text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 z-30 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowBackSharp />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[32%] lg:right-[12%] h-[48px] w-[48px] text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 z-30 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowForwardSharp />
          </div>
        )}
        className="w-full "
      >
        {/* page1 */}
        {services?.map((service) => (
          <div
            key={service.id}
            className=" w-full lg:h-[450px] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-16 "
          >
            {/* left site */}
            <div className="w-full text-start space-y-5 ">
              <h4 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-semibold ">
                Our Services
              </h4>
              <h1 className=" text-[22px] lg:text-[40px] font-bold leading-tight ">
                {service.serviceName}
              </h1>
              <p className="text-[#0E0E2C]/60 dark:text-white/60 text-[18px] lg:text-[22px] ">
                {service.description.split(" ").slice(0, 30).join(" ")}
              </p>
            </div>
            {/* right site */}
            <div className=" w-full h-[440px] lg:h-[450px] relative flex justify-center lg:mt-12 lg:ml-16 ">
              <div className="w-[350px] h-[350px] z-10 ">
                <Image
                  src={service.image}
                  alt="serviceImage"
                  width={350}
                  height={350}
                  className="object-cover w-[350px] h-[350px]"
                />
              </div>
            </div>
            <div className="absolute hidden lg:top-0 lg:right-0 lg:flex ">
              <Image src={tiktik} alt="tiktik" className="dark:invert" />
            </div>
          </div>
        ))}
      </Carousel>
      {/* Overlay */}
      <div className="absolute w-full h-full lg:h-[450px] bg-transparent z-20">
        {" "}
      </div>
    </div>
  );
};

export default ServicePageCarousel;
