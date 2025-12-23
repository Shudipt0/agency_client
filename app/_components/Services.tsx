import { getServices } from "../actions/service/fetchService";
import ServiceCard from "./ServiceCard";

const Services = async () => {
  const services = await getServices();
  // console.log(services);

  return (
    <section className="container mx-auto px-6 py-4 md:py-8">
      <div className="py-4">
        <h4 className="text-[16px] lg:text-[22px] font-semibold text-blue-600 dark:text-white ">
          The Services We Offers
        </h4>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 lg:space-y-8">
        <div className=" col-span-1 lg:col-span-2">
          <h1 className=" lg:w-full text-[22px] lg:text-[34px] font-bold leading-tight">
            We offer a variaty of services to help you to grow and build your
            brand and help you with developing your Products
          </h1>
        </div>

        {services.map((service: any) => (
          <div className="cols-span-1 lg:w-60 " key={service.id}>
            <ServiceCard
              service={{
                id: service.id,
                title: service.service_name,
                description: service.description,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
