import React from "react";
import { AnimatedTestimonialsDemo } from "./AboutHeroCard";


const AboutHero = () => {
  return (
    <section className="w-full py-6 lg:py-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
        {/* left side */}
        <div className="w-full lg:w-[540px] col-span-1 space-y-4 lg:space-y-8">
          <h4 className=" text-[16px] lg:text-[22px] font-semibold text-blue-600 dark:text-white ">
            The Team behind DigitUX
          </h4>
          <h1 className="text-[22px] lg:text-[34px] font-bold leading-tight ">
            A team of creative Who Excited to help you with your Idea
          </h1>
          <p className="text-[18px] lg:text-[22px] text-gray-400 leading-tight" >Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product</p>
        </div>
        {/* right side */}
     <div className="col-span-1">
         <AnimatedTestimonialsDemo/>
     </div>
      </div>
    </section>
  );
};

export default AboutHero;
