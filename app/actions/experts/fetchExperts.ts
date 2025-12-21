export const getExperts = async () => {
  // fetch Experts
  const res = await fetch(`http://localhost:5000/api/v1/experts`);
  const experts = await res.json();
  return experts;
};

export const getExpertDetails = async (id: string) => {
  // fetch Experts
  const res = await fetch(`http://localhost:5000/api/v1/experts/${id}`);
  const expert = await res.json();
  return expert;
};
