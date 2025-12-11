import { IoIosArrowForward } from "react-icons/io";

interface Service {
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="md:w-[240px] md:h-[222px] flex flex-col justify-between  space-y-4">
      <h3 className="text-[22px] font-bold text-blue-600 dark:text-white leading-tight ">
        {service.title}
      </h3>
      <p className="text-[16px] text-[#0E0E2C]/60 dark:text-white/80 ">
        {service.description.split(" ").slice(0, 14).join(" ")}
      </p>
      <button className=" w-[130px] h-[40px] text-sm flex items-center justify-center gap-4 text-blue-500 dark:text-white border-2 border-blue-500 dark:border-white rounded">
        Lern More
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default ServiceCard;
