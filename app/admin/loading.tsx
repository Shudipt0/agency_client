import { Skeleton } from "@/components/ui/skeleton"

const DashboardLoading = () => {
  return (
     <div className="w-full flex flex-col justify-center items-center gap-8 px-8 py-32">           
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />     
    </div>
  )
}

export default DashboardLoading
