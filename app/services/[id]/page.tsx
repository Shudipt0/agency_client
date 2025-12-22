import { getServicesDetails } from "@/app/actions/service/fetchService";
import Image from "next/image";

const serviceDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) => {
  const { id } = await params;
  const service = await getServicesDetails(id as string);
  // console.log(service);
  return (
    <section className="w-full min-h-[400px] container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-start">
      <div className="w-full">
        <h1 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold pb-5 ">
          {service[0]?.service_name}
        </h1>
        <div>
          <Image
            src={service[0]?.image}
            alt={service[0]?.service_name}
            width={300}
            height={100}
            className="md:float-right object-cover"
          />
          <p className="text-[14px] md:text-[18px] text-[#0E0E2C]/70 dark:text-white/70">
            {service[0]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default serviceDetailsPage;
