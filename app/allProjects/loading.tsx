import { Skeleton } from "@/components/ui/skeleton"

const AllProjectLoading = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen w-full p-4 md:p-32">
       <div className="w-full flex items-center space-x-4">      
      <div className="w-full flex flex-col md:w-[50%] space-y-4">
        <Skeleton className=" w-full h-3 md:w-14 md:h-7 " />
        <Skeleton className="w-full h-36  md:w-[600px] md:h-[200px]" />
        <Skeleton className="w-full h-8 md:w-[550px] md:h-14 " />
        <Skeleton className=" w-full h-8 md:w-20 md:h-8 " />
      </div>
      <Skeleton className="hidden md:inline md:h-[400px] w-[50%] rounded " />
    </div>
    </div>
  )
}

export default AllProjectLoading
