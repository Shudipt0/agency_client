import ProjectShowcaseCart from "../_components/ProjectShowcaseCart";
import { getProjects } from "../actions/projects/fetchProjects";
export const dynamic = "force-dynamic";

const allProjects = async () => {
  // data fetching from the database
  const projects = await getProjects();

  return (
    <div className="w-full container mx-auto px-6 lg:px-28 flex flex-col justify-center items-center text-center my-20 lg:my-32 space-y-6 lg:space-y-8 p-6">
      {/* texts */}
      <div className="text-start lg:text-center space-y-3 lg:space-y-6">
        <h1 className="text-2xl lg:text-3xl font-bold ">Project Gallery</h1>
        <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60  dark:text-white/60  lg:w-[732px] leading-tight">
          Explore a collection of projects showcasing various technologies and
          creative solutions.
        </p>
      </div>
      {/* project showcase section*/}
      <div className="w-full pt-16 lg:pt-32 lg:space-y-28">
        {projects.map((item: any) => (
          <ProjectShowcaseCart item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default allProjects;
