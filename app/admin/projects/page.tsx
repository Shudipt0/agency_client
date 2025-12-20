import { DataTable } from "@/app/_components/DataTable";
import { getProjects } from "@/app/actions/projects/fetchProjects";
import { columns } from "../../../lib/data/ProjectColumn";

const ProjectPage = async () => {
  const projects = await getProjects();
  // console.log(projects)
  return (
    <div className="w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        Projects Table
      </h1>
      <div className="p-5">
        <DataTable data={projects} columns={columns} />
      </div>
    </div>
  );
};

export default ProjectPage;
