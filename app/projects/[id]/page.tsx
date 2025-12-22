import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { getProjectDetails } from "../../actions/projects/fetchProjects";

const projectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) => {
  const { id } = await params;
  const project = await getProjectDetails(id as string);
  // console.log(project);
  return (
    <section className="w-full min-h-[400px] container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-start">
      <div className="w-full">
        <h1 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold pb-3 ">
          {project[0]?.title}
        </h1>
        <div>
          <Image
            src={project[0]?.image}
            alt={project[0]?.title}
            width={300}
            height={100}
            className="md:float-right object-cover"
          />
          <h3 className="text-[15px] lg:text-[20px] text-blue-500 dark:text-white font-bold pb-5 ">
            {project[0]?.category}
          </h3>
          <p className="text-[14px] md:text-[18px] text-[#0E0E2C]/70 dark:text-white/70">
            {project[0]?.description}
          </p>
        </div>
        <Link href={project[0]?.link} target="blank">
          <button className="flex items-center gap-3 text-sm text-blue-500 dark:text-white px-5 py-3 border-2 border-blue-500 dark:border-white rounded font-semibold mt-3 ">
            Check Preview
            <span>
              <IoIosArrowForward size={20} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default projectDetailsPage;
