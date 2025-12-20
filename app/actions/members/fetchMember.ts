export const getMembers = async () => {
  // fetch members
  const res = await fetch(`http://localhost:5000/api/v1/users`);
  const members = await res.json();
  return members;
};
