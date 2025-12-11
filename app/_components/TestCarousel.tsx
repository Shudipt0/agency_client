"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

import Image from "next/image";


interface Expert {
  id: number;
  experts_name: string;
  bio_data: string;
  thought: string;
  image: string;
}

interface TestCarouselProps {
  experts: Expert[];
}

const TestCarousel = ({ experts }: TestCarouselProps) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center ">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 left-[30%] lg:left-[44%] h-[48px] w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 flex items-center justify-center cursor-pointer"
          >
            <IoArrowBackSharp />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[30%] lg:right-[44%] h-[48px] w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 z-5 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowForwardSharp />
          </div>
        )}
        className="w-full "
      >
        {experts.map((item) => (
          <div
            key={item.id}
            className=" w-full  h-fit md:h-[350px] text-start py-[75px] "
          >
            <p className="text-[16px] lg:text-[22px] text-gray-400 ">
              {item.thought.split(" ").slice(0, 35).join(" ")}
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="w-[68px] h-[68px] rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt="expertsImage"
                  width={68}
                  height={68}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-[18px] font-semibold ">
                  {item.experts_name}
                </h1>
                <p className="text-[16px] text-gray-400">{item.bio_data}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* Overlay */}
      <div className="absolute w-full h-full bg-transparent z-10 "> </div>
    </div>
  );
};

export default TestCarousel;
