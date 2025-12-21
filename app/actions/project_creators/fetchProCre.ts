export const getRelation = async () => {
  // fetch project_creator
  const res = await fetch(`http://localhost:5000/api/v1/project_creators`);
  const project_creators = await res.json();
  return project_creators;
};
