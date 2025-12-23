import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Common from "../_components/Common";
import Testmonial from "../_components/Testmonial";
import { getProjects } from "../actions/projects/fetchProjects";
export const dynamic = "force-dynamic";

const projectDescription = {
  page: "Our Projects",
  title: "Project We Realised",
  description:
    "Our team helped alot of startup and company to realise their Products and helped thousnd of client to grow their business",
  buttonText: "Let's Talk",
  buttonLink: "/contact",
};

const numbering = [
  { title: "Happy Clients", number: "+150" },
  { title: "Project Done", number: "+450" },
  { title: "Solutions Created", number: "+10" },
  { title: "Bussiness Growed", number: "+25" },
];
const projectPage = async () => {
  const projects = await getProjects();
  // console.log(projects);

  return (
    <div className="w-full container mx-auto px-6 md:px-28 mt-20 md:mt-32 flex flex-col items-center  ">
      {/* part 1 */}
      <Common
        page={projectDescription.page}
        title={projectDescription.title}
        description={projectDescription.description}
        buttonText={projectDescription.buttonText}
        buttonLink={projectDescription.buttonLink}
      />

      {/* showcase items */}

      <div className="w-full pt-8 md:pt-14 md:space-y-28 ">
        {projects?.map((item: any, index: number) => {
          const isEven = index % 2 === 0;
          return isEven ? (
            <div
              key={item.id}
              className=" w-full flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 "
            >
              {/* left site */}
              <div className="md:w-[540px] space-y-3 md:space-y-6">
                <h3 className="text-[16px] md:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
                  {item?.category}
                </h3>
                <h1 className="text-[22px] md:text-[40px] text-black dark:text-white/80 font-bold leading-tight">
                  {item?.title}
                </h1>
                <p className="text-[16px] md:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
                  {item?.description}
                </p>
                <div className="hidden md:flex">
                  <Link href={`/projects/${item.id}`}>
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
              <div className="w-full md:w-[540px]  ">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={540}
                  height={295}
                  className="w-full md:w-[540px] "
                />
              </div>
              <div className="w-full flex justify-center md:hidden">
                <Link href={`/projects/${item.id}`}>
                  <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-3">
                    Check the project
                    <span>
                      <IoIosArrowForward size={20} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className=" w-full flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:gap-0 pt-6 md:pt-0"
            >
              <div className="w-full flex justify-center md:hidden">
                <Link href={`/projects/${item.id}`}>
                  <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-3">
                    Check the project
                    <span>
                      <IoIosArrowForward size={20} />
                    </span>
                  </button>
                </Link>
              </div>

              <div className="w-full md:w-[540px]  ">
                <Image
                  src={item?.image}
                  alt={item.title}
                  width={540}
                  height={295}
                  className="w-full md:w-[540px]"
                />
              </div>
              {/* right site */}
              <div className="md:w-[540px] space-y-3 md:space-y-6">
                <h3 className="text-[16px] md:text-[22px] font-bold text-blue-500 dark:text-white leading-tight">
                  {item?.category}
                </h3>
                <h1 className="text-[22px] md:text-[40px] text-black dark:text-white font-bold leading-tight">
                  {item?.title}
                </h1>
                <p className="text-[16px] md:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
                  {item?.description}
                </p>
                <div className="hidden md:flex">
                  <Link href={`/projects/${item.id}`}>
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
          );
        })}
      </div>

      {/* button */}
      <div className="py-12 md:py-20 ">
        <Link href="/allProjects">
          <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold ">
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

export default projectPage;
