import snake from "@/app/images/snake.svg";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import ContactpageAccour from "../_components/ContactpageAccour";
import ServicePageCarousel from "../_components/ServicePageCarousel";
import Testmonial from "../_components/Testmonial";
export const dynamic = "force-dynamic";

const ContactPage = async () => {
  // Fetching services from the database can be done here if needed
  const services = [
    {
      id: 2,
      created_at: "2025-12-15T04:44:24.000Z",
      serviceName: "development",
      description: "we are working from heart!",
      image:
        "https://res.cloudinary.com/dsktb64i8/image/upload/v1765795464/ctlubnigc1um6lgstjwk.png",
      image_public_id: "ctlubnigc1um6lgstjwk",
    },
    {
      id: 3,
      created_at: "2025-12-15T04:44:24.000Z",
      serviceName: "development",
      description: "we are working from heart!",
      image:
        "https://res.cloudinary.com/dsktb64i8/image/upload/v1765795464/ctlubnigc1um6lgstjwk.png",
      image_public_id: "ctlubnigc1um6lgstjwk",
    },
  ];

  return (
    <div className="w-full relative">
      <div className="w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center ">
        {/* part1 */}
        <div className="w-full lg:w-[768px]  flex flex-col justify-center items-center text-start md:text-center space-y-8 ">
          <h4 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold">
            Let’s Have a chat
          </h4>
          <h1 className="text-[40px] font-bold ">An expert at your services</h1>
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
        {/* servicePageCarousel */}
        <ServicePageCarousel services={services} />
        {/* Testimonial */}
        <Testmonial />
      </div>
    </div>
  );
};

export default ContactPage;
