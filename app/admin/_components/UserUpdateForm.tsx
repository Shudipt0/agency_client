'use client'

import { updateUser } from "@/app/actions/user";
import Link from "next/link";

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

const UserUpdateFormPage = (userData: UserData) => {
  return (
    <div className=' flex flex-col items-center gap-10 ' >
     <h3 className='text-[22px] text-black/80  font-semibold' > User Update</h3>
      <form action={updateUser} className='w-[600px] border border-blue-400 rounded-md bg-white p-10 flex flex-col justify-center items-start space-y-5 ' >
        <input type="hidden" name='id' value={userData.id} />
           <div className='w-full flex flex-col gap-4 items-start '  >
             <label htmlFor="email" className="text-sm font-bold text-black/80 ">Email:</label>
             <input type="email" name='email' id='email' defaultValue={userData.email} className='w-full border border-gray-300 rounded px-4 py-1 text-[16px] font-semibold text-gray-500' disabled />
           </div>
           <div className='w-full flex flex-col gap-4 items-start '  >
             <label htmlFor="firstName" className="text-sm font-bold text-black/80 ">First Name:</label>
             <input type="text" name='firstName' id='firstName' defaultValue={userData.firstName} className='w-full border border-gray-300 rounded px-4 py-1 text-[16px] font-semibold text-gray-500' />
           </div>
           <div className='w-full flex flex-col gap-4 items-start '  >
             <label htmlFor="lastName" className="text-sm font-bold text-black/80 ">Last Name:</label>
             <input type="text" name='lastName' id='lastName' defaultValue={userData.lastName} className='w-full border border-gray-300 rounded px-4 py-1 text-[16px] font-semibold text-gray-500' />
           </div>
            <div className='w-full flex flex-col gap-4 items-start '  >
             <label htmlFor="role" className="text-sm font-bold text-black/80 ">Role:</label>
             <select name="role" id="role" defaultValue={userData.role} className='w-full border border-gray-300 rounded text-[16px] font-semibold text-gray-500 px-4 py-1 ' >
              <option value="none">Remove</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
             </select>
           </div>
           <div className="space-x-3">
           <button type='submit' className='text-white bg-blue-500 hover:bg-blue-700 rounded px-3 py-1' >Update User</button>
           <button className='text-white bg-green-500 hover:bg-green-700 rounded px-3 py-1' ><Link href='/admin/users'>Back</Link></button>

           </div>
      </form>
    </div>
  )
}

export default UserUpdateFormPage
