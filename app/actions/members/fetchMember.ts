export const getMembers = async () => {
  // fetch members
  const res = await fetch(`${process.env.BASE_URL}/users`);
  const members = await res.json();
  return members;
};

export const getMemberDetails = async (id: string) => {
  // fetch member
  const res = await fetch(`${process.env.BASE_URL}/users/${id}`);
  const member = await res.json();
  return member;
};
