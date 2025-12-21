export const getMembers = async () => {
  // fetch members
  const res = await fetch(`http://localhost:5000/api/v1/users`);
  const members = await res.json();
  return members;
};

export const getMemberDetails = async (id: string) => {
  // fetch member
  const res = await fetch(`http://localhost:5000/api/v1/users/${id}`);
  const member = await res.json();
  return member;
};
