import { DataTable } from '@/app/_components/DataTable'
import { prisma } from '@/lib/utils'
import {columns} from '@/lib/data/ServiceColumn'

const page = async () => {
  const services = await prisma.service.findMany();
  // console.log(services)
  return (
    <div className='w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover' > 
        <h1 className='text-[22px] font-semibold text-black/80 mt-10 '>Service Table</h1>
      <div className='p-5' >
        <DataTable data={services} columns={columns} />
      </div>      
    </div>
  )
}

export default page
