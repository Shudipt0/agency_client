"use client";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from "next/image";
import Link from "next/link";

interface Expert {
  id: number;
  expert_name: string;
  bio_data: string;
  thought: string;
  image: string;
}

interface TestCarouselProps {
  experts: Expert[];
}

const TestCarousel = ({ experts }: TestCarouselProps) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center touch-pan-y">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 left-[35%] lg:left-[44%] h-8 w-8 md:h-[48px] md:w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 flex items-center justify-center cursor-pointer"
          >
            <IoArrowBackSharp />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[35%] lg:right-[44%] h-8 w-8 md:h-[48px] md:w-[48px] z-20 text-blue-500 dark:text-white rounded-full border-2 border-blue-500 dark:bg-blue-500 z-5 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoArrowForwardSharp />
          </div>
        )}
        swipeable={true}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={20}
        className="w-full touch-pan-y"
      >
        {experts.map((item) => (
          <div
            key={item.id}
            className=" w-full h-fit text-start pt-10 pb-16 md:pb-[65px] "
          >
            <p className="text-[16px] lg:text-[22px] text-gray-400 ">
              {item.thought.split(" ").slice(0, 35).join(" ")}
            </p>
            <Link
              href={`/expert/${item.id}`}
              className="w-fit flex items-center space-x-4 mt-4"
            >
              <div className="w-10 h-10 md:w-[68px] md:h-[68px] rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt="expertsImage"
                  width={68}
                  height={68}
                  className="object-cover"
                />
              </div>
              <div className="">
                <h1 className="text-[18px] font-semibold ">
                  {item.expert_name}
                </h1>
                <p className="text-[16px] text-gray-400">{item.bio_data}</p>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
      {/* Overlay */}
      {/* <div className="absolute w-full h-full bg-transparent z-10 "> </div> */}
    </div>
  );
};

export default TestCarousel;
