export const getProjects = async () => {
  // fetch projects
  const res = await fetch(`${process.env.BASE_URL}/projects`);
  const projects = await res.json();
  return projects;
};

export const getProjectDetails = async (id: string) => {
  // fetch projects
  const res = await fetch(`${process.env.BASE_URL}/projects/${id}`);
  const project = await res.json();
  return project;
};
