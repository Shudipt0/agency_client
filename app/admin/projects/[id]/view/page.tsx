import { prisma } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    params: Promise<{id: string}>
}

const ProjectViewPage = async (props: Props) => {
    const {id} = await props.params;

    const projects = await prisma.project.findUnique({
        where: {id: Number(id)},
    })
  return (
    <div className='w-full flex flex-col items-center justify-center bg-backgroundBanner bg-no-repeat bg-cover' >
      <div className='text-[24px] font-semibold text-black/80 pt-10 underline ' ><Link href='/admin/projects'>Back</Link></div>
      <div className='w-full p-20 space-y-6  ' >
        <h4 className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm'>Id: {projects?.id}</h4>
        <h1 className='text-3xl font-bold text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.category}</h1>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.title}</p>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.link}</p>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.description}</p>
        {projects?.image && (
          <div className='w-[300px] bg-slate-100 p-5 rounded shadow-sm'><Image src={projects?.image} alt="image" width={300} height={200} className='object-cover w-[300px] h-[200px] ' /></div>
        )}
      </div>
    </div>
  )
}

export default ProjectViewPage
