import { getExpertDetails } from "@/app/actions/experts/fetchExperts";
import Image from "next/image";

const expertsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) => {
  const { id } = await params;
  const expert = await getExpertDetails(id as string);
  //   console.log(expert);
  return (
    <section className="w-full min-h-[400px] container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-start">
      <div className="w-full">
        <h1 className="text-[17px] lg:text-[24px] text-blue-500 dark:text-white font-bold capitalize pb-3 ">
          {expert[0]?.expert_name}
        </h1>

        <div>
          <Image
            src={expert[0]?.image}
            alt={expert[0]?.expert_name}
            width={300}
            height={100}
            className="md:float-right object-cover w-28 h-28 md:w-[250px] md:h-[250px] rounded-full ring-4 ring-green-500 mb-5 md:ml-5"
          />
          <h3 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold capitalize pb-5 ">
            {expert[0]?.bio_data}
          </h3>
          <p className="text-[14px] md:text-[18px] text-[#0E0E2C]/70 dark:text-white/70 capitalize">
            {expert[0]?.thought}
          </p>
        </div>
      </div>
    </section>
  );
};

export default expertsDetailsPage;
