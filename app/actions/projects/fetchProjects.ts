export const getProjects = async () => {
  // fetch projects
  const res = await fetch(`http://localhost:5000/api/v1/projects`);
  const projects = await res.json();
  return projects;
};
