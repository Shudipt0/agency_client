import { Skeleton } from "@/components/ui/skeleton";

const ContactLoading = () => {
  return (
    <div className=" w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center ">
      <div className="w-full lg:w-[768px] flex flex-col justify-center items-start lg:items-center text-start lg:text-center space-y-6 lg:space-y-8 ">
        <Skeleton className=" w-[70px] h-6 md:w-[96px] md:h-8 " />
        <Skeleton className="w-full h-[120px] md:w-[500px] md:h-[120px] " />
        <Skeleton className="w-full h-8 md:w-[540px] md:h-9" />
        <Skeleton className="w-full h-8 md:w-[540px] md:h-9" />
        <Skeleton className="w-full h-8 md:w-[540px] md:h-9" />
        <Skeleton className="w-full h-8 md:w-[540px] md:h-9" />
        <Skeleton className="w-full h-12 md:w-[540px] md:h-36" />
        <Skeleton className="w-full h-8 md:w-[540px] md:h-9" />      
      </div>
    </div>
  );
};

export default ContactLoading;