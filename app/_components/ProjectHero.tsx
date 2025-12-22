import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { getProjects } from "../actions/projects/fetchProjects";

const ProjectHero = async () => {
  //  fetching data from the database
  const projects = await getProjects();

  // console.log("Projects:", projects);
  return (
    <section className="container mx-auto px-6 py-6 lg:pb-14 lg:pt-4">
      <div className="w-full lg:w-[540px] space-y-4 lg:space-y-8">
        <h4 className=" text-[16px] lg:text-[22px] font-semibold text-blue-600 dark:text-white ">
          The work we realised
        </h4>
        <h1 className="text-[22px] lg:text-[34px] font-bold leading-tight ">
          The work we did that made our Client happy and satisfied
        </h1>
      </div>
      {/* cards */}
      <div className="w-full flex flex-col items-center justify-center py-20 space-y-8 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-3 justify-center items-center">
          {projects.map((project: any) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="col-span-1"
            >
              <Image
                src={project?.image}
                alt={project.title}
                width={350}
                height={350}
                className="w-[350px] h-[350px] rounded"
              />
              <div className=" mt-2 lg:mt-3 ">
                <h4 className="text-[12px] lg:text-sm font-bold text-blue-500 dark:text-white ">
                  {project.category}
                </h4>
                <p className="text-[12px] lg:text-sm text-gray-500 dark:text-white/80 ">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/allProjects">
          <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold ">
            Explore More Projects{" "}
            <span>
              <IoIosArrowForward size={20} />
            </span>{" "}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectHero;
