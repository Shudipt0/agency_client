"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateUser = async (data: FormData) => {
  const id = data.get("id") as string;
  const firstName = data.get("firstName") as string;
  const lastName = data.get("lastName") as string;
  const role = data.get("role") as string;

  try {
    const client = await clerkClient();
     await client.users.updateUser(id, {
      firstName,
      lastName,
      publicMetadata: {
        role: role === "none" ? undefined : role,
      },
    });
 
    
      
    
  } catch (error) {
    console.log(error);
    
  }
  revalidatePath("/admin/users")
     redirect("/admin/users");
};
