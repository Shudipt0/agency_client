import { clerkClient } from '@clerk/nextjs/server'
import Image from 'next/image';
import Link from 'next/link';
import { FaUserEdit } from "react-icons/fa";


const UserPage = async () => {
    const client = await clerkClient();
    const users = await client.users.getUserList()
    // console.log(users)
  return (
    <div className='w-full min-h-screen max-h-fit flex items-start justify-center bg-backgroundBanner bg-no-repeat bg-cover' >
      <table className='w-[90%] my-10 table-auto border-collapse border border-gray-400 shadow-lg ' >
        <caption className="caption-top my-5 text-[22px] font-semibold">
   User List
  </caption>
        <thead>
          <tr className='bg-slate-200'>
            <td className='border border-gray-300 pl-8 py-3 text-[22px] text-black/70 font-bold '>Image</td>
            <td className='border border-gray-300 pl-8 py-3 text-[22px] text-black/70 font-bold'>Name</td>
            <td className='border border-gray-300 pl-8 py-3 text-[22px] text-black/70 font-bold'>E-mail</td>
            <td className='border border-gray-300 pl-8 py-3 text-[22px] text-black/70 font-bold'>Role</td>
            <td className='border border-gray-300 pl-8 py-3 text-[22px] text-black/70 font-bold'>Edit</td>
          </tr>
        </thead>
        <tbody>
            {users?.data?.map((user)=> (
                <tr key={user.id} className='' >
                    <td className='hidden'>{user.id}</td>
                    <td className='border border-gray-300 pl-8 py-3'><Image src={user.imageUrl} alt='profileImage' width={40} height={40} className='w-12 rounded-full ' /></td>
                    <td className='border border-gray-300 pl-8 py-3 text-[18px] text-black/70 font-semibold'>{user.fullName ? user.fullName : '---'}</td>
                    <td className='border border-gray-300 pl-8 py-3 text-[18px] text-black/70 font-semibold'>{user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : ''}</td>
                    <td className='border border-gray-300 pl-8 py-3 text-[18px] text-black/70 font-semibold'>{JSON.stringify(user.publicMetadata.role) || 'Default'}</td>
                    <td className='border border-gray-300 py-3 text-[18px] text-black/70 font-semibold'><Link href={`/admin/users/${user.id}`} className='w-full flex justify-center hover:text-red-500' ><FaUserEdit /></Link></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserPage
