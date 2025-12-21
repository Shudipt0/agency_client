import { DataTable } from "@/app/_components/DataTable";
import { getRelation } from "@/app/actions/project_creators/fetchProCre";
import { columns } from "@/lib/data/ProjectsCreatorRelationColumn";

const projectCreatorRelation = async () => {
  const project_creators = await getRelation();
  //   console.log(project_creators);
  return (
    <div className="w-full min-h-screen max-h-fit text-center">
      <h1 className="text-[22px] font-semibold text-black/80 dark:text-white/80 mt-10 ">
        Relation Table
      </h1>
      <div className="p-5">
        <DataTable data={project_creators} columns={columns} />
      </div>
    </div>
  );
};

export default projectCreatorRelation;
