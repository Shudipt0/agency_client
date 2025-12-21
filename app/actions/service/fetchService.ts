export const getServices = async () => {
  // fetch services
  const res = await fetch(`http://localhost:5000/api/v1/services`);
  const services = await res.json();
  return services;
};

export const getServicesDetails = async (id: string) => {
  // fetch service
  const res = await fetch(`http://localhost:5000/api/v1/services/${id}`);
  const service = await res.json();
  return service;
};
