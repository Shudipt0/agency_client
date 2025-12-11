import { checkRole } from '@/lib/authUtils';
import { clerkClient } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react'
import UserUpdateFormPage from '../../_components/UserUpdateForm';
// import Image from 'next/image';
// import backgroundImage from '@/app/images/background.png';

type Props = {
    params: Promise<{id: string}>
}
const UserUpdatePage = async (props: Props) => {
    const {id} = await props.params;

    const isAdmin = await checkRole('admin');
    if(!isAdmin) return <div className='mx-auto p-64' >Unauthorized. Must be Admin to access, <Link href='/admin/users' className='text-[18px] text-blue-500 font-semibold underline ' >go back...</Link></div>

    const client = await clerkClient();
    const user = await client.users.getUser(id);
    const userData = {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName ?? "Empty",
      lastName: user.lastName ?? "Empty",
      role: user.publicMetadata?.role as string ?? 'none'
    }

    // console.log(userData)

  return (
    <div className='w-full h-screen flex items-center justify-center bg-backgroundBanner bg-no-repeat bg-cover' >
        <UserUpdateFormPage
          id={userData.id}
          email={userData.email}
          firstName={userData.firstName}
          lastName={userData.lastName}
          role={userData.role}
        />
        {/* <Image src={backgroundImage} alt="Background" layout="fill" objectFit="cover" /> */}
    </div>
  )
}

export default UserUpdatePage