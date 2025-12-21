import { getProjectDetails } from "@/app/actions/projects/fetchProjects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

const ProjectViewPage = async (props: Props) => {
  const { id } = await props.params;

  const projects = await getProjectDetails(id);
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen max-h-fit ">
      <div className="text-[24px] font-semibold text-black/80 dark:text-white/80 pt-10 underline ">
        <Link href="/admin/projects">Back</Link>
      </div>
      <div className="w-full p-20 space-y-6  ">
        <h4 className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          Id: {projects[0]?.id}
        </h4>
        <h1 className="text-2xl font-thin text-black/80 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          {projects[0]?.category}
        </h1>
        <p className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          {projects[0]?.title}
        </p>
        <p className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          {projects[0]?.link}
        </p>
        <p className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          {projects[0]?.description}
        </p>
        {projects[0]?.image && (
          <div className="w-full flex justify-center bg-slate-100 dark:bg-slate-800 p-5 rounded shadow-sm">
            <Image
              src={projects[0]?.image}
              alt="image"
              width={300}
              height={200}
              className="object-cover w-[300px] h-[200px] "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectViewPage;
