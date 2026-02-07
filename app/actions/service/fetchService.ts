export const getServices = async () => {
  // fetch services
  const res = await fetch(`${process.env.BASE_URL}/services`);
  const services = await res.json();
  return services;
};

export const getServicesDetails = async (id: string) => {
  // fetch service
  const res = await fetch(`${process.env.BASE_URL}/services/${id}`);
  const service = await res.json();
  return service;
};
