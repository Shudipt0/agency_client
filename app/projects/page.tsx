import image1 from "@/app/images/project1.svg";
import image2 from "@/app/images/project2.svg";
import image3 from "@/app/images/project4.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import Testmonial from "../_components/Testmonial";
export const dynamic = "force-dynamic";


const projectDescription = {
  page: "Our Projects",
  title: "Project We Realised",
  description:
    "Our team helped alot of startup and company to realise their Products and helped thousnd of client to grow their business",
};

const numbering = [
  { title: "Happy Clients", number: "+150" },
  { title: "Project Done", number: "+450" },
  { title: "Solutions Created", number: "+10" },
  { title: "Bussiness Growed", number: "+25" },
];
const page = () => {
  return (
    <div className="w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center  ">
      <div className="lg:w-[768px] flex flex-col justify-center items-start lg:items-center text-start lg:text-center space-y-6 lg:space-y-8 ">
        <h4 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold ">
          {projectDescription.page}
        </h4>
        <h1 className="text-[40px] font-bold ">{projectDescription.title}</h1>
        <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60 lg:w-[732px]">
          {projectDescription.description}
        </p>
          <div className="w-full flex justify-center">
        <Link href='/contact'>
          
          <button className="flex items-center gap-3 text-[18px] lg:text-[22px] font-medium px-3 py-1 ">
            Let's Talk
            <span className="text-blue-500 dark:text-white pt-1 ">
              <IoArrowForwardSharp />
            </span>
          </button>
        </Link>
      </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-between gap-16  pt-10">
          {numbering.map((item, index) => (
            <div key={index} className="space-y-3 text-start">
              <h4 className="text-[16px] text-blue-500 dark:text-white font-semibold ">
                {item.title}
              </h4>
              <h1 className="text-4xl font-bold text-black dark:text-white ">{item.number}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* showcase items */}

      <div className="w-full pt-20 lg:pt-32 lg:space-y-28 ">
        {/* part 1 */}
        <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 ">
          {/* left site */}
          <div className="lg:w-[540px]  mt-10 md:mt-0 space-y-6">
            <h3 className="text-[16px] lg:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
              Web / App Development
            </h3>
            <h1 className="text-[22px] lg:text-[40px] text-black dark:text-white/80 font-bold leading-tight">
              Delex Relay , a delivery platfrome
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
              Delex is a Delivery Platforme for bussiness owner And indivudial
              who want to send packages from a point to an other ,Delex offer a
              tracking system too
            </p>
            <div className="hidden lg:flex">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
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
            <Image src={image1} alt="image1" className="w-full lg:w-[540px] " />
          </div>
             <div className="w-full flex justify-center lg:hidden">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
        </div>
        {/* part 2 */}
        <div className=" w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-0 pt-20 lg:pt-0">
         <div className="w-full flex justify-center lg:hidden">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
          {/* left site */}
          <div className="w-full  mt-10 md:mt-0 lg:w-[540px]  ">
            <Image src={image2} alt="image1" className="w-full lg:w-[540px]" />
          </div>
          {/* right site */}
          <div className="lg:w-[540px] space-y-6">
            <h3 className="text-[16px] lg:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
              UI/UX Design
            </h3>
            <h1 className="text-[22px] lg:text-[40px] text-black dark:text-white font-bold leading-tight">
              Cooke Me ,Fresh food At your Home
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
              Cooke me is an platform that offer fresh meal with a cheap price
              and allow indivudial to sell their meals
            </p>
           <div className="hidden lg:flex">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
          </div>
          
        </div>

        {/* part 3 */}
        <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 pt-20 lg:pt-0">
          {/* left site */}
          <div className="lg:w-[540px]  mt-10 md:mt-0 space-y-6">
            <h3 className="text-[16px] lg:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
              Web / App Development
            </h3>
            <h1 className="text-[22px] lg:text-[40px] text-black dark:text-white font-bold leading-tight">
              ADOC,Your Online Medical Appoinments
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
              ADOC Is an online Medical appoinment That allow user To take an
              appoinment with a doctor , it alos work as a medical files Holder
            </p>
            <div className="hidden lg:flex">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
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
            <Image src={image3} alt="image1" className="w-full lg:w-[540px] " />
          </div>
          <div className="w-full flex justify-center lg:hidden">
            <Link href="#" >
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
                Check the project
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
            </div>
        </div>
        
      </div>

      {/* button */}
      <div className="py-[60px] lg:py-32 " >
        <Link href="/allProjects">
              <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-5 ">
                Explore More Projects
                <span>
                  <IoIosArrowForward size={20} />
                </span>
              </button>
            </Link>
      </div>
            {/* Testimonial */}
      <Testmonial />
    </div>
  );
};

export default page;
