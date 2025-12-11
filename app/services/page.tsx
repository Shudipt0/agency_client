import React from "react";
import Common from "../_components/Common";
import victorUp from "@/app/images/Vector3.svg";
import victorDown1 from "@/app/images/Vector4.svg";
import victorDown2 from "@/app/images/Vector4.svg";
import Image from "next/image";
// import ServicePageCarousel from "../_components/ServicePageCarousel";
import { prisma } from "@/lib/utils";
import Testmonial from "../_components/Testmonial";
import ServicePageCarouselWrapper from "../_components/ServicePageCarouselWrapper";
export const dynamic = "force-dynamic";




const serviceDescription = {
  page: "Our Services",
  title: "Services We Offers",
  description:
    "With  Our Awesome team we offers a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product",
  buttonText: "Check our Projects",
  buttonLink: "/projects",
};

const cartDescription = [
  {
    number: "01",
    title: "User Research",
    description:
      "User research helps us find out exactly how our target customers feel when interacting with a product",
  },
  {
    number: "02",
    title: "Design",
    description:
      "User research helps us find out exactly how our target customers feel when interacting with a product ",
  },
  {
    number: "03",
    title: "Test",
    description:
      "User research helps us find out exactly how our target customers feel when interacting with a product",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "User research helps us find out exactly how our target customers feel when interacting with a product",
  },
];

const page = async () => {
  // Fetching services from the database can be done here if needed
  const services = await prisma.service.findMany();
  // console.log("services lenght", services.length);
  return (
    <div className="w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center ">
      {/* part 1 */}
      <Common
        page={serviceDescription.page}
        title={serviceDescription.title}
        description={serviceDescription.description}
        buttonText={serviceDescription.buttonText}
        buttonLink={serviceDescription.buttonLink}
      />
      {/* part 2 */}

      <div className="w-full py-[70px] lg:py-32 ">
        <h4 className="text-[22px] text-blue-500 dark:text-white font-bold pb-5 ">
          Our Process
        </h4>

        <div className=" flex flex-col lg:flex-row justify-between gap-16">
          {/* left site */}
          <div className="w-full   ">
            <h1 className="text-[40px] font-bold leading-tight ">
              Our Working Process help you to get the best from our team skill{" "}
            </h1>
          </div>
          {/* right site */}
          <div className="w-full  ">
            <p className="text-[#0E0E2C]/60 dark:text-white/60 text-[22px] ">
              With Our team knowloadg of different process We Choose the perfect
              process to suit the Development of your Product{" "}
            </p>
          </div>
        </div>
      </div>

      {/* part 3 */}
      <div className="w-full lg:h-[435px] flex items-center relative">
        <div className="hidden lg:inline  absolute top-0 left-[30%] ">
          <Image src={victorUp} alt="victorUp" className="dark:invert" />
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-4 justify-between items-center space-y-12 lg:space-y-0 ">
          {/* cart */}
          {cartDescription.map((item, index) => (
            <div key={index} className="lg:w-[250px] space-y-4">
              <h1 className="text-[22px] font-semibold flex gap-4 items-end ">
                <span className="text-3xl font-bold text-blue-500 dark:text-white ">
                  {item.number}
                </span>
                {item.title}
              </h1>
              <p className="text-[16px] text-[#0E0E2C]/60 dark:text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* images */}
        <div className="hidden lg:inline absolute bottom-0 left-[10%] ">
          <Image src={victorDown1} alt="victordown" className="dark:invert" />
        </div>
        <div className="hidden lg:inline absolute bottom-0 right-[20%] ">
          <Image src={victorDown2} alt="victordown" className="dark:invert" />
        </div>
      </div>

      {/* part 4 */}

      <div className="w-full py-28 lg:py-32 ">
        {/* <ServicePageCarousel services={services} /> */}
        <ServicePageCarouselWrapper services={services}/>
      </div>
      {/* Testimonial */}
      <Testmonial />
    </div>
  );
};

export default page;
