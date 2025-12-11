import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";

type CommonProps = {
  page: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const Common = ({
  page,
  title,
  description,
  buttonText,
  buttonLink,
}: CommonProps) => {
  return (
    <div className=" lg:w-[768px] flex flex-col justify-center items-start lg:items-center text-start lg:text-center space-y-6 lg:space-y-8 ">
      <h4 className=" text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold ">
        {page}
      </h4>
      <h1 className="text-[40px] font-bold ">{title}</h1>
      <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60 lg:w-[732px]">
        {description}
      </p>
      <div className="w-full flex justify-center">
        <Link href={buttonLink}>
          
          <button className="flex items-center gap-3 text-[18px] lg:text-[22px] font-medium px-3 py-1 ">
            {buttonText}
            <span className="text-blue-500 dark:text-white pt-1 ">
              <IoArrowForwardSharp />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Common;
