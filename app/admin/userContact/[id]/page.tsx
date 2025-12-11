import { prisma } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{id: string}>
}

const teamViewPage = async (props: Props) => {
    const {id} = await props.params;

    const userContact = await prisma.contact.findUnique({
        where: {id: Number(id)},
    })
  return (
    <div className='w-full flex flex-col items-center justify-center bg-backgroundBanner bg-no-repeat bg-cover' >
        <div className='pt-10' >
            <Link href='/admin' className=' text-[24px] text-black/80 font-semibold underline ' >Back</Link>
        </div>
      <div className='w-full p-20 space-y-6  ' >
        <h1 className='text-3xl font-bold text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm' >{userContact?.name}</h1>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{userContact?.email}</p>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{userContact?.phone}</p>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{userContact?.message}</p>
       
      </div>
    </div>
  )
}

export default teamViewPage
