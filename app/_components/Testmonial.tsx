// import TestCarousel from './TestCarousel'

import { getExperts } from "../actions/experts/fetchExperts";
import TestimonialCarouselWrapper from "./TestimonialCarouselWrapper";
export const dynamic = "force-dynamic";

const Testmonial = async () => {
  const experts = await getExperts();

  // console.log(experts)
  return (
    <section className="w-full bg-[#A0A4AB]/10 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-6 h-[592px] lg:h-[700px] flex flex-col justify-center ">
        <div className="w-full lg:w-[660px] space-y-4 lg:space-y-8">
          <h4 className="text-[16px] lg:text-[22px] font-semibold text-blue-600 dark:text-white ">
            Testmonial
          </h4>
          <h1 className="text-[22px] lg:text-[34px] font-bold leading-tight ">
            You still hesitate about working with Us ? Check what They say about
            Us{" "}
          </h1>
        </div>
        {/* carousel */}
        <div className="w-full ">
          {/* <TestCarousel experts={experts} /> */}
          <TestimonialCarouselWrapper experts={experts} />
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
