export const getRelation = async () => {
  // fetch project_creator
  const res = await fetch(`${process.env.BASE_URL}/project_creators`);
  const project_creators = await res.json();
  return project_creators;
};
