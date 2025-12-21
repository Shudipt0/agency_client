import { getProjects } from "@/app/actions/projects/fetchProjects";
import ProjectUpdateFormPage from "@/app/admin/_components/ProjectUpdateForm";

type Props = {
  params: Promise<{ id: string }>;
};
const ProjectEditPage = async (props: Props) => {
  const { id } = await props.params;

  const projects = await getProjects();
  return (
    <div className="w-full h-fit min-h-screen">
      {projects && (
        <ProjectUpdateFormPage
          id={projects[0]?.id}
          category={projects[0]?.category}
          title={projects[0]?.title}
          link={projects[0]?.link}
          description={projects[0]?.description}
          image={projects[0]?.image}
        />
      )}
    </div>
  );
};

export default ProjectEditPage;
