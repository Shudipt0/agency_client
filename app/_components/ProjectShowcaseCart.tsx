import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ShowcaseItem {
    category: string;
    title: string;
    description: string;
    image: string;
    // link: string;
}

const ProjectShowcaseCart = ({ item }: { item: ShowcaseItem }) => {
    const { category, title, description, image } = item;
  return (
            <div className=" w-full flex flex-col lg:flex-row justify-between items-center  gap-12 lg:gap-0 ">
          {/* left site */}
          <div className="lg:w-[540px] mt-10 md:mt-0 space-y-6 text-start">
            <h3 className="text-[16px] lg:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
              {category}
            </h3>
            <h1 className="text-[22px] lg:text-[40px] text-black dark:text-white font-bold leading-tight">
              {title}
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60 ">
              {description}
            </p>
            <div className="hidden lg:flex">
            <Link href='#' >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-3 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
           
          </div>
          {/* right site */}
          <div className="w-full lg:w-[540px]  ">
            <Image src={image} alt="image1" className="w-full h-[350px] lg:w-[540px] lg:h-[450px] rounded-lg " width={540} height={295} />
          </div>
             <div className="w-full flex justify-center lg:hidden">
            <Link href='#' >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 dark:border-white rounded font-semibold mt-5 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
        </div>
  );
};

export default ProjectShowcaseCart;
