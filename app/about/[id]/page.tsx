import { getMemberDetails } from "@/app/actions/members/fetchMember";
import Image from "next/image";

const memberDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) => {
  const { id } = await params;
  const details = await getMemberDetails(id as string);
  //   console.log(details[0].projects);
  return (
    <section className="w-full min-h-[400px] container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-start">
      <div className="w-full">
        <h1 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold pb-5 ">
          {details[0]?.name}
        </h1>

        <div>
          <Image
            src={details[0]?.image}
            alt={details[0]?.name}
            width={150}
            height={150}
            className="md:float-right object-cover w-28 h-28 md:w-[250px] md:h-[250px] rounded-full ring-4 ring-blue-500 mb-5 md:ml-5 "
          />
          <h3 className="text-[18px] lg:text-[26px] text-blue-500 dark:text-white font-thin pb-5">
            {details[0]?.profession}
          </h3>
          <p className="text-[14px] md:text-[18px] text-[#0E0E2C]/70 dark:text-white/70">
            {details[0]?.bio_data}
            Fast. Secure. Scalable. Built to grow with your business.We develop
            high-performance websites and web applications using the latest
            technologies. Whether it's a sleek corporate site or a powerful
            eCommerce platformFast. Secure. Scalable. Built to grow with your
            business.We develop high-performance websites and web applications
            using the latest technologies. Whether it's a sleek corporate site
            or a powerful eCommerce platformFast. Secure. Scalable. Built to
            grow with your business.We develop high-performance websites and web
            applications using the latest technologies. Whether it's a sleek
            corporate site or a powerful eCommerce platformFast. Secure.
            Scalable. Built to grow with your business.We develop
            high-performance websites and web applications using the latest
            technologies. Whether it's a sleek corporate site or a powerful
            eCommerce platformFast. Secure. Scalable. Built to grow with your
            business.We develop high-performance websites and web applications
            using the latest technologies. Whether it's a sleek corporate site
            or a powerful eCommerce platformFast. Secure. Scalable. Built to
            grow with your business.We develop high-performance websites and web
            applications using the latest technologies. Whether it's a sleek
            corporate site or a powerful eCommerce platformFast. Secure.
            Scalable. Built to grow with your business.We develop
            high-performance websites and web applications using the latest
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memberDetailsPage;
