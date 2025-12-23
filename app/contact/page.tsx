import snake from "@/app/images/snake.svg";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import ContactpageAccour from "../_components/ContactpageAccour";
import ServicePageCarousel from "../_components/ServicePageCarousel";
import Testmonial from "../_components/Testmonial";
import { getServices } from "../actions/service/fetchService";
export const dynamic = "force-dynamic";

const ContactPage = async () => {
  // Fetching services from the database can be done here if needed
  const services = await getServices();

  return (
    <div className="w-full relative">
      <div className="w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center gap-10 md:gap-0">
        {/* part1 */}
        <div className="w-full lg:w-[768px]  flex flex-col justify-center items-center text-start md:text-center spacey-5 md:space-y-8 ">
          <h4 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold leading-tight">
            Let’s Have a chat
          </h4>
          <h1 className="text-[28px] md:text-[40px] font-bold ">
            An expert at your services
          </h1>
          {/* contact form */}
          <ContactForm />
        </div>
        {/* Background snake image */}
        <div className="hidden md:inline absolute w-full top-40 ">
          <Image src={snake} alt="" className="w-full z-0 dark:invert" />
        </div>
        {/* part2 */}
        <ContactpageAccour />
        {/* part3 */}
        <ServicePageCarousel services={services} />
        {/* Testimonial */}
        <Testmonial />
      </div>
    </div>
  );
};

export default ContactPage;
