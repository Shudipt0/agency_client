export const getExperts = async () => {
  // fetch Experts
  const res = await fetch(`${process.env.BASE_URL}/experts`);
  const experts = await res.json();
  return experts;
};

export const getExpertDetails = async (id: string) => {
  // fetch Experts
  const res = await fetch(`${process.env.BASE_URL}/experts/${id}`);
  const expert = await res.json();
  return expert;
};
